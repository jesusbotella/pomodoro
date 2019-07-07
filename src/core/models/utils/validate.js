export default function validate(requiredProperties, properties) {
  const erroredProperty = requiredProperties.find(
    /* eslint-disable valid-typeof */
    property => !properties[property.name]
      || typeof properties[property.name] !== property.type,
  );

  return {
    valid: !erroredProperty,
    erroredProperty,
  };
}
