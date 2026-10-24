import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl bg-[#191B20] border border-white/10 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-left shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Cerrar ventana"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg bg-[#14161C] border border-white/5 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-[#F4B735] uppercase mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Información Legal · Código Físico</span>
        </div>

        <h3 id="modal-title" className="text-xl sm:text-2xl font-black text-white uppercase mb-4">
          {type === 'terms' ? 'Términos y Condiciones del Programa' : 'Política de Privacidad y Manejo de Datos'}
        </h3>

        <div className="space-y-4 text-sm text-[#B8BBC2] leading-relaxed">
          {type === 'terms' ? (
            <>
              <p>
                <strong>1. Naturaleza del Producto:</strong> Código Fuerza 28 es un producto digital de contenido educativo en formato PDF. Al adquirirlo, el comprador obtiene una licencia de uso personal, no transferible y no comercial.
              </p>
              <p>
                <strong>2. Procesamiento de Pago y Entrega:</strong> Todos los pagos son procesados de forma segura a través de Hotmart. Una vez confirmado y aprobado el pago, el comprador recibe las credenciales y el enlace de descarga por correo electrónico directamente de la plataforma Hotmart.
              </p>
              <p>
                <strong>3. Garantía y Devolución:</strong> Tu compra cuenta con un plazo de garantía de 7 días naturales desde la fecha de compra, gestionada a través de los canales oficiales de Hotmart conforme a sus políticas de compra.
              </p>
              <p>
                <strong>4. Responsabilidad y Salud:</strong> La práctica de cualquier actividad física conlleva riesgos inherentes. Se aconseja consultar con un profesional de la salud antes de iniciar cualquier programa de ejercicios, especialmente si padeces alguna condición preexistente.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Privacidad y Seguridad:</strong> Código Físico respeta la privacidad de sus usuarios. No vendemos ni compartimos tu información personal con terceros.
              </p>
              <p>
                <strong>2. Datos de Transacción:</strong> Los datos de pago (tarjeta de crédito, PayPal, etc.) son procesados directamente por la pasarela segura de Hotmart y nunca son almacenados ni visualizados por Código Físico.
              </p>
              <p>
                <strong>3. Comunicaciones:</strong> El correo electrónico proporcionado en la compra se utiliza exclusivamente para el envío del material digital, notificaciones sobre actualizaciones del producto y soporte relacionado con tu compra.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#FFC83D] hover:bg-[#FFD46B] text-[#101115] font-black text-sm uppercase transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
