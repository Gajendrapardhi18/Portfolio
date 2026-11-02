import React, { useEffect, useRef } from 'react';
import { ResumeData } from '../data/resumes';
import { ResumePdfViewer } from './ResumePdfViewer';

interface Props {
  resume: ResumeData | null;
  onClose: () => void;
}

export const ResumePreviewModal: React.FC<Props> = ({ resume, onClose }) => {
  const modalPanelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!resume) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [resume, onClose]);

  // Manage background scroll lock
  useEffect(() => {
    if (resume) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [resume]);

  if (!resume) return null;

  return (
    <div
      className="modal-backdrop resume-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${resume.title} Preview`}
    >
      <div ref={modalPanelRef} className="modal-panel resume-modal-panel">
        <ResumePdfViewer resume={resume} onClose={onClose} />
      </div>
    </div>
  );
};

export default ResumePreviewModal;
