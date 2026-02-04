import { useState } from 'react';
import { Delete } from 'lucide-react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = display;

    if (previousValue !== null && operation !== null && !newNumber) {
      handleEquals();
    } else {
      setPreviousValue(currentValue);
    }

    setOperation(op);
    setNewNumber(true);
  };

  const handleEquals = () => {
    if (previousValue === null || operation === null) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        result = current !== 0 ? prev / current : 0;
        break;
    }

    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleBackspace = () => {
    if (display.length === 1) {
      setDisplay('0');
      setNewNumber(true);
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const buttons = [
    { label: 'C', type: 'clear', color: 'bg-red-500 hover:bg-red-600 text-white' },
    { label: '⌫', type: 'backspace', color: 'bg-gray-300 hover:bg-gray-400 text-gray-800' },
    { label: '÷', type: 'operation', color: 'bg-blue-500 hover:bg-blue-600 text-white' },
    { label: '×', type: 'operation', color: 'bg-blue-500 hover:bg-blue-600 text-white' },
    { label: '7', type: 'number', color: 'bg-white hover:bg-gray-100 text-gray-900' },
    { label: '8', type: 'number', color: 'bg-white hover:bg-gray-100 text-gray-900' },
    { label: '9', type: 'number', color: 'bg-white hover:bg-gray-100 text-gray-900' },
    { label: '-', type: 'operation', color: 'bg-blue-500 hover:bg-blue-600 text-white' },
    { label: '4', type: 'number', color: 'bg-white hover:bg-gray-100 text-gray-900' },
    { label: '5', type: 'number', color: 'bg-white hover:bg-gray-100 text-gray-900' },
    { label: '6', type: 'number', color: 'bg-white hover:bg-gray-100 text-gray-900' },
    { label: '+', type: 'operation', color: 'bg-blue-500 hover:bg-blue-600 text-white' },
    { label: '1', type: 'number', color: 'bg-white hover:bg-gray-100 text-gray-900' },
    { label: '2', type: 'number', color: 'bg-white hover:bg-gray-100 text-gray-900' },
    { label: '3', type: 'number', color: 'bg-white hover:bg-gray-100 text-gray-900' },
    { label: '=', type: 'equals', color: 'bg-green-500 hover:bg-green-600 text-white' },
    { label: '0', type: 'number', color: 'bg-white hover:bg-gray-100 text-gray-900', span: 2 },
    { label: '.', type: 'decimal', color: 'bg-white hover:bg-gray-100 text-gray-900' },
  ];

  const handleClick = (button: typeof buttons[0]) => {
    switch (button.type) {
      case 'number':
        handleNumber(button.label);
        break;
      case 'operation':
        handleOperation(button.label);
        break;
      case 'equals':
        handleEquals();
        break;
      case 'decimal':
        handleDecimal();
        break;
      case 'clear':
        handleClear();
        break;
      case 'backspace':
        handleBackspace();
        break;
    }
  };

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Smart Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautiful, fully functional calculator with smooth animations
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-6">
            <div className="bg-gray-950 rounded-2xl p-6 mb-6">
              <div className="text-right">
                {previousValue !== null && operation !== null && (
                  <div className="text-gray-500 text-sm mb-2">
                    {previousValue} {operation}
                  </div>
                )}
                <div className="text-white text-4xl font-light truncate">
                  {display}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(button)}
                  className={`
                    ${button.color}
                    ${button.span === 2 ? 'col-span-2' : ''}
                    h-16 rounded-xl font-semibold text-lg
                    shadow-lg hover:shadow-xl
                    transform hover:scale-105 active:scale-95
                    transition-all duration-200
                    flex items-center justify-center
                  `}
                >
                  {button.label === '⌫' ? (
                    <Delete className="w-5 h-5" />
                  ) : (
                    button.label
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Quick Tips
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Press C to clear all calculations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Use backspace to delete the last digit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Chain operations for complex calculations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
