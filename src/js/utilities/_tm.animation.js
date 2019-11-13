// Animation Preset Array
// CSS animation prsets
const tmAnimations = {
  
  'fadeIn':'opacity: 0;easing: swing;',

  // Slide in
  'slideInUpShort' : 'opacity:0;transY: 50px;easing:easeFastSlow;',
  'slideInRightShort' : 'opacity:0;transX: 50px;easing:easeFastSlow;',
  'slideInDownShort' : 'opacity:0;transY: -50px;easing:easeFastSlow;',
  'slideInLeftShort' : 'opacity:0;transX: -50px;easing:easeFastSlow;',
  'slideInUpLong' : 'opacity:0;transY: 250px;easing:easeFastSlow;',
  'slideInRightLong' : 'opacity:0;transX: 250px;easing:easeFastSlow;',
  'slideInDownLong' : 'opacity:0;transY: -250px;easing:easeFastSlow;',
  'slideInLeftLong' : 'opacity:0;transX: -250px;easing:easeFastSlow;',

  // Bounce in
  'bounceIn' : 'opacity:0;scale:0.7;easing:easeBounceIn;',
  'bounceOut' : 'opacity:0;scale:1.4;easing:easeBounceIn;',
  'bounceInUp' : 'opacity:0;transY: 250px;easing:easeBounceIn;',
  'bounceInRight' : 'opacity:0;transX: 250px;easing:easeBounceIn;',
  'bounceInDown' : 'opacity:0;transY: -250px;easing:easeBounceIn;',
  'bounceInLeft' : 'opacity:0;transX: -250px;easing:easeBounceIn;',
  
  // Scale in
  'scaleIn' : 'opacity:0;scale: 0.6;easing:easeFastSlow;',
  'scaleOut' : 'opacity:0;scale: 1.4;easing:easeFastSlow',
  
  // Flips & Spins
  'flipInX' : 'opacity:0;rotateX: -180deg;easing:easeFastSlow;',
  'flipInY' : 'opacity:0;rotateY: -180deg;easing:easeFastSlow;',
  'spinInX' : 'opacity:0;rotateX: -540deg;easing:easeFastSlow;',
  'spinInY' : 'opacity:0;rotateY: -540deg;easing:easeFastSlow;',
  'helicopterIn' : 'opacity:0;scale: 0.6;rotateZ: -360deg;easing:easeFastSlow;',
  'helicopterOut' : 'opacity:0;scale: 1.4;rotateZ: -360deg;easing:easeFastSlow;',
  
  // Special
  'signSwingTop' : 'opacity:0;rotateX:-60deg;transOrigX:50%;transOrigY:0%;easing:easeSwingInOut;',
  'signSwingRight' : 'opacity:0;rotateY:-60deg;transOrigX:100%;transOrigY:50%;easing:easeSwingInOut;',
  'signSwingBottom' : 'opacity:0;rotateX:-60deg;transOrigX:50%;transOrigY:100%;easing:easeSwingInOut;',
  'signSwingLeft' : 'opacity:0;rotateY:-60deg;transOrigX:0%;transOrigY:50%;easing:easeSwingInOut;',
  'wiggleX' : 'opacity:0;rotateX:-90deg;transOrigX:50%;transOrigY:50%;easing:easeSwingInOut;',
  'wiggleY' : 'opacity:0;rotateY:-90deg;transOrigX:50%;transOrigY:50%;easing:easeSwingInOut;',
  'dropUp' : 'opacity:0;transY: 250px;rotateZ:20deg;transOrigX:50%;transOrigY:50%;easing:easeBounceBackHard;',
  'dropDown' : 'opacity:0;transY: -250px;rotateZ:-20deg;transOrigX:0%;transOrigY:0%;easing:easeBounceBackHard;',
  'rollInLeft' : 'opacity:0;transX: -250px;transY: 200px;rotateZ: -120px;transOrigX:0%;transOrigY:0%;easing:easeFastSlow;',
  'rollInRight' : 'opacity:0;transX: 250px;transY: 200px;rotateZ: 120px;transOrigX:100%;transOrigY:0%;easing:easeFastSlow;',
  'turnInRight' : 'opacity:0;transX: 250px;rotateX:20deg;rotateY:75deg;transOrigX:0%;transOrigY:0%;easing:easeBounceBack;',
  'turnInLeft' : 'opacity:0;transX: -250px;rotateX:20deg;rotateY:-75deg;transOrigX:100%;transOrigY:0%;easing:easeBounceBack;'
};

// Export animation object
export default tmAnimations;
