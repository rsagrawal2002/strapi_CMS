import type { Schema, Struct } from '@strapi/strapi';

export interface ContactInfoContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    Address: Schema.Attribute.String;
    Email: Schema.Attribute.String;
    PhoneNo: Schema.Attribute.String;
  };
}

export interface DescriptionDescription extends Struct.ComponentSchema {
  collectionName: 'components_description_descriptions';
  info: {
    displayName: 'Description';
  };
  attributes: {
    ad1: Schema.Attribute.String;
    ad2: Schema.Attribute.String;
    ad3: Schema.Attribute.String;
  };
}

export interface FeatureFeature extends Struct.ComponentSchema {
  collectionName: 'components_feature_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface PointsPoints extends Struct.ComponentSchema {
  collectionName: 'components_points_points';
  info: {
    displayName: 'Points';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-info.contact-info': ContactInfoContactInfo;
      'description.description': DescriptionDescription;
      'feature.feature': FeatureFeature;
      'points.points': PointsPoints;
    }
  }
}
