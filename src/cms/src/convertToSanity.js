const fs = require('fs');

const netlifyConfig = require('./collections/recipes');

const sanitySchema = {
  name: netlifyConfig.name,
  title: netlifyConfig.label,
  type: 'document',
  fields: netlifyConfig.fields.map(field => {
    if (typeof field === 'function') {
      return field;
    } else {
      const { label, name, widget, ...otherProps } = field;
      return {
        name,
        title: label,
        type: getFieldType(widget),
        ...otherProps
      };
    }
  })
};

function getFieldType(widget) {
  switch (widget) {
    case 'string':
      return 'string';
    case 'image':
      return 'image';
    case 'boolean':
      return 'boolean';
    case 'list':
      return 'array';
    case 'markdown':
      return 'block';
    default:
      return 'text';
  }
}

fs.writeFileSync('sanitySchema.js', `export default ${JSON.stringify(sanitySchema, null, 2)};`);

console.log('Conversion completed');
