import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics to console (in production, send to analytics)
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input-delay') {
          const fidEntry = entry as PerformanceEventTiming;
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
        }
        if (entry.entryType === 'cumulative-layout-shift') {
          const clsEntry = entry as any;
          console.log('CLS:', clsEntry.value);
        }
      }
    });

    // Monitor navigation timing
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.fetchStart);
          console.log('DOM Content Loaded:', navEntry.domContentLoadedEventEnd - navEntry.fetchStart);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay', 'cumulative-layout-shift'] });
      navigationObserver.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported');
    }

    return () => {
      observer.disconnect();
      navigationObserver.disconnect();
    };
  }, []);

  return null;
};