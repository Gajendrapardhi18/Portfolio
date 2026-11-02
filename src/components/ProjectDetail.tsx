import React from 'react';
import { Project } from '../data/projects';
import { ProjectDetailModal } from './ProjectDetailModal';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetail: React.FC<Props> = ({ project, onClose }) => {
  return <ProjectDetailModal project={project} onClose={onClose} />;
};

export default ProjectDetail;
