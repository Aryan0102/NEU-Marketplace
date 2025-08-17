import { colors } from '../constants/colors';

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="text-center">
        <div 
          className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
          style={{ borderColor: colors.primary }}
        ></div>
        <p style={{ color: colors.text }}>Loading...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
