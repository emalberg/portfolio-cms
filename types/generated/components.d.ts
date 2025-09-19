import type { Schema, Struct } from '@strapi/strapi';

export interface CertificateCertificate extends Struct.ComponentSchema {
  collectionName: 'components_certificate_certificates';
  info: {
    displayName: 'Certificate';
    icon: 'thumbUp';
  };
  attributes: {
    dateReceived: Schema.Attribute.Date;
    expirationDate: Schema.Attribute.Date;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Issuer: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface CertificateCertificateSection extends Struct.ComponentSchema {
  collectionName: 'components_certificate_certificate_sections';
  info: {
    displayName: 'Certificate_Section';
    icon: 'emotionHappy';
  };
  attributes: {
    Certificates: Schema.Attribute.Component<'certificate.certificate', true>;
    Description: Schema.Attribute.Blocks;
    Order: Schema.Attribute.Integer & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeroHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'rocket';
  };
  attributes: {
    Background: Schema.Attribute.Media<'images' | 'files'>;
    Keyword: Schema.Attribute.JSON;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Order: Schema.Attribute.Integer & Schema.Attribute.Required;
    Personal_Bio: Schema.Attribute.Blocks;
    Personal_Bio_Title: Schema.Attribute.String;
    Phrase: Schema.Attribute.Text;
    Professional_Bio: Schema.Attribute.Blocks;
    Professional_Bio_Title: Schema.Attribute.String;
  };
}

export interface IconIcon extends Struct.ComponentSchema {
  collectionName: 'components_icon_icons';
  info: {
    displayName: 'Icon';
    icon: 'apps';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    SVG: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface NavigationCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_navigation_cta_buttons';
  info: {
    displayName: 'CTA_Button';
    icon: 'bell';
  };
  attributes: {
    Order: Schema.Attribute.Integer & Schema.Attribute.Unique;
    Text: Schema.Attribute.String & Schema.Attribute.Required;
    URL: Schema.Attribute.String;
  };
}

export interface NavigationNavBarLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_bar_links';
  info: {
    displayName: 'NavBar_Link';
    icon: 'layer';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Order: Schema.Attribute.Integer & Schema.Attribute.Required;
    Target: Schema.Attribute.String;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Project';
    icon: 'apps';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Links: Schema.Attribute.JSON;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectProjectSection extends Struct.ComponentSchema {
  collectionName: 'components_project_project_sections';
  info: {
    displayName: 'Project_Section';
    icon: 'dashboard';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Order: Schema.Attribute.Integer & Schema.Attribute.Required;
    Projects: Schema.Attribute.Component<'project.project', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SkillSkill extends Struct.ComponentSchema {
  collectionName: 'components_skill_skills';
  info: {
    displayName: 'Skill';
    icon: 'chartBubble';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface SkillSkillSection extends Struct.ComponentSchema {
  collectionName: 'components_skill_skill_sections';
  info: {
    displayName: 'Skill_Section';
    icon: 'expand';
  };
  attributes: {
    Order: Schema.Attribute.Integer & Schema.Attribute.Required;
    Skills: Schema.Attribute.Component<'skill.skill', true>;
    Sub: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SocialSocial extends Struct.ComponentSchema {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'Social';
    icon: 'message';
  };
  attributes: {
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Order: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SocialSocialSection extends Struct.ComponentSchema {
  collectionName: 'components_social_social_sections';
  info: {
    displayName: 'Social_Section';
    icon: 'book';
  };
  attributes: {
    Socials: Schema.Attribute.Component<'social.social', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'certificate.certificate': CertificateCertificate;
      'certificate.certificate-section': CertificateCertificateSection;
      'hero.hero-section': HeroHeroSection;
      'icon.icon': IconIcon;
      'navigation.cta-button': NavigationCtaButton;
      'navigation.nav-bar-link': NavigationNavBarLink;
      'project.project': ProjectProject;
      'project.project-section': ProjectProjectSection;
      'skill.skill': SkillSkill;
      'skill.skill-section': SkillSkillSection;
      'social.social': SocialSocial;
      'social.social-section': SocialSocialSection;
    }
  }
}
