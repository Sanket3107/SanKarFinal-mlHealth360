declare interface Calendly {
  initPopupWidget: (options: { url: string }) => void;
  showPopupWidget: (url: string) => void;
}

declare interface Window {
  Calendly?: Calendly;
}