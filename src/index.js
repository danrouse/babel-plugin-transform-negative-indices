export default function ({ types: t }) {
  return {
    visitor: {
      MemberExpression(path) {
        const { expression } = path.parent;
        // console.log('expr', path.parent.expression);
        if (expression.computed === true) {
          const { property } = expression;
          console.log('is computed');
          if (property.type === 'UnaryExpression' &&
              property.operator === '-' &&
              property.prefix === true) {
            const { value } = property.argument;

            console.log('repl property', property);
            property.replaceWith(
              t.binaryExpression('-',
                t.memberExpression(expression.object, t.identifier('length'), false),
                t.numericLiteral(value)));
          }
        }
      }
    }
  };
}
