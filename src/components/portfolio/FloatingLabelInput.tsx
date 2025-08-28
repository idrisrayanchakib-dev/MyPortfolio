import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingLabelInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

export function FloatingLabelInput({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  multiline = false,
  rows = 3
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setHasValue(value.length > 0);
  }, [value]);

  const isFloating = isFocused || hasValue;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="relative">
      <div className="relative">
        <InputComponent
          ref={inputRef as any}
          type={multiline ? undefined : type}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={multiline ? rows : undefined}
          className={`
            w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl 
            transition-all duration-300 ease-out resize-none
            ${isFocused 
              ? 'border-white/40 bg-white/20 shadow-lg shadow-black/10' 
              : 'border-white/20 hover:border-white/30'
            }
            ${error ? 'border-red-400/60' : ''}
            text-foreground placeholder-transparent focus:outline-none
            ${multiline ? 'min-h-[100px]' : 'h-14'}
          `}
          placeholder={label}
        />
        
        <motion.label
          htmlFor={label}
          className={`
            absolute left-4 pointer-events-none transition-all duration-300 ease-out
            ${isFloating 
              ? 'top-2 text-xs text-muted-foreground' 
              : `${multiline ? 'top-4' : 'top-4'} text-base text-muted-foreground`
            }
          `}
          animate={{
            y: isFloating ? 0 : 0,
            scale: isFloating ? 0.85 : 1,
            color: isFocused ? 'rgb(115, 115, 130)' : 'rgb(113, 113, 130)'
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </motion.label>
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-2 ml-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}