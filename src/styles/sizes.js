export default {
  up() {},
  down(size) {
    const sizes = {
      xs1: '320px',
      xs2: '360px',
      xs3: '375px',
      xs: '575.98px',
      sm: '768px',
      md: '991.98px',
      lg: '1199.98px',
      xl: '1600px',
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};
