import axios from 'axios';

// Configure suas credenciais do Back4App aqui
const BACK4APP_APP_ID = 'YOUR_APP_ID'; // Substitua com seu App ID
const BACK4APP_REST_API_KEY = 'YOUR_REST_API_KEY'; // Substitua com sua REST API Key
const BACK4APP_URL = 'https://parseapi.back4app.com';

const api = axios.create({
  baseURL: BACK4APP_URL,
  headers: {
    'X-Parse-Application-Id': BACK4APP_APP_ID,
    'X-Parse-REST-API-Key': BACK4APP_REST_API_KEY,
    'Content-Type': 'application/json',
  },
});

export interface Profile {
  objectId?: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

export interface Education {
  objectId?: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  gpa?: string;
}

export interface Experience {
  objectId?: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  technologies?: string[];
}

export interface Project {
  objectId?: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

// Profile API
export const getProfile = async (): Promise<Profile | null> => {
  try {
    const response = await api.get('/classes/Profile');
    if (response.data.results && response.data.results.length > 0) {
      return response.data.results[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export const createProfile = async (profile: Profile): Promise<Profile> => {
  try {
    const response = await api.post('/classes/Profile', profile);
    return { ...profile, objectId: response.data.objectId };
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
};

export const updateProfile = async (objectId: string, profile: Partial<Profile>): Promise<void> => {
  try {
    await api.put(`/classes/Profile/${objectId}`, profile);
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

// Education API
export const getEducation = async (): Promise<Education[]> => {
  try {
    const response = await api.get('/classes/Education', {
      params: {
        order: '-startDate',
      },
    });
    return response.data.results || [];
  } catch (error) {
    console.error('Error fetching education:', error);
    throw error;
  }
};

export const createEducation = async (education: Education): Promise<Education> => {
  try {
    const response = await api.post('/classes/Education', education);
    return { ...education, objectId: response.data.objectId };
  } catch (error) {
    console.error('Error creating education:', error);
    throw error;
  }
};

// Experience API
export const getExperience = async (): Promise<Experience[]> => {
  try {
    const response = await api.get('/classes/Experience', {
      params: {
        order: '-startDate',
      },
    });
    return response.data.results || [];
  } catch (error) {
    console.error('Error fetching experience:', error);
    throw error;
  }
};

export const createExperience = async (experience: Experience): Promise<Experience> => {
  try {
    const response = await api.post('/classes/Experience', experience);
    return { ...experience, objectId: response.data.objectId };
  } catch (error) {
    console.error('Error creating experience:', error);
    throw error;
  }
};

// Projects API
export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await api.get('/classes/Project', {
      params: {
        order: '-featured,-createdAt',
      },
    });
    return response.data.results || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const createProject = async (project: Project): Promise<Project> => {
  try {
    const response = await api.post('/classes/Project', project);
    return { ...project, objectId: response.data.objectId };
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

export default api;
