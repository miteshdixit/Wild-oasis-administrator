import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar(){
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  // Safely accessing user_metadata only if user is defined
  const userMetadata = user?.user_metadata;

  if (!userMetadata) {
    return <div>No user metadata available</div>;
  }

  const { fullName, avatar } = userMetadata;

  return (
    <StyledUserAvatar>
      <Avatar src={avatar || 'default-user.jpg'} alt={`Avatar of ${fullName}`} />
    </StyledUserAvatar>
  );
}

export default UserAvatar;
