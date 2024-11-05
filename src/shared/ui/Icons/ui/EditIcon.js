/**
 *
 */
export const EditIcon = ({ iconColor = "" } = {}) => {
  return `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 14.55V17.0833C2.5 17.3166 2.68333 17.5 2.91667 17.5H5.45C5.55833 17.5 5.66667 17.4583 5.74167 17.375L14.8417 8.28329L11.7167 5.15829L2.625 14.25C2.54167 14.3333 2.5 14.4333 2.5 14.55ZM17.2583 5.86663C17.3356 5.78953 17.3969 5.69796 17.4387 5.59715C17.4805 5.49634 17.502 5.38827 17.502 5.27913C17.502 5.16999 17.4805 5.06192 17.4387 4.96111C17.3969 4.8603 17.3356 4.76872 17.2583 4.69163L15.3083 2.74163C15.2312 2.66438 15.1397 2.60309 15.0389 2.56127C14.938 2.51945 14.83 2.49792 14.7208 2.49792C14.6117 2.49792 14.5036 2.51945 14.4028 2.56127C14.302 2.60309 14.2104 2.66438 14.1333 2.74163L12.6083 4.26663L15.7333 7.39163L17.2583 5.86663Z" 
fill="${iconColor ? iconColor : "currentColor"}"/>
</svg>
`;
};
