import styled from "styled-components";

const Link = ({ className, children }) => (
  <a href className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: red;
  font-size: 44px;
`;
export default StyledLink;
