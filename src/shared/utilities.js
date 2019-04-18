export const getJunctionLightColour = function(junctions, position) {
  return junctions.find(junction => junction.position === position).lightColour;
};
