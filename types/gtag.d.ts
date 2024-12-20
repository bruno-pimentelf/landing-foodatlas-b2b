interface Window {
  gtag: (
    command: string,
    target: string,
    config?: {
      page_path?: string;
      event_category?: string;
      event_label?: string;
      value?: number;
    }
  ) => void;
} 