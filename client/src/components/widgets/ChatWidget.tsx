import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPrompt && !isOpen && (
        <div 
          className="fixed bottom-24 right-4 md:right-8 p-4 bg-primary text-white rounded-lg shadow-lg animate-bounce"
          onClick={() => setIsOpen(true)}
        >
          Need a demo? Chat with us!
        </div>
      )}

      <div className="fixed bottom-4 right-4 md:right-8 z-50">
        {isOpen ? (
          <Card className="w-80 h-96 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">Chat with us</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="text-sm text-muted-foreground">
                Hello! How can we help you today?
              </div>
            </div>
            <div className="p-4 border-t">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 border rounded-md"
              />
            </div>
          </Card>
        ) : (
          <Button
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>
    </>
  );
}
