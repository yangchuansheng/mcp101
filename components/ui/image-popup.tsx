'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImagePopupProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  description?: React.ReactNode;
  qrCodeCaption?: string;
}

export function ImagePopup({
  children,
  imageSrc,
  imageAlt = '弹窗图片',
  title,
  description,
  qrCodeCaption
}: ImagePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div onClick={openPopup} className="cursor-pointer">
        {children}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={closePopup}>
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg bg-white p-12 text-gray-800"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '600px' }}
          >
            <button
              className="absolute right-4 top-4 z-10 rounded-full p-1 text-gray-600 hover:text-gray-900"
              onClick={closePopup}
            >
              <X size={24} />
            </button>

            {title && (
              <h2 className="mb-6 text-2xl font-bold">{title}</h2>
            )}

            {description && (
              <div className="mb-8 text-gray-600">{description}</div>
            )}

            <div className="flex flex-col items-center justify-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-full object-contain"
                style={{ maxHeight: '300px' }}
              />

              {qrCodeCaption && (
                <p className="mt-4 text-sm text-gray-500">{qrCodeCaption}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
