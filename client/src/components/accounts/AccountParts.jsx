import React from "react";
import { useParams } from "react-router-dom";
import ProfileSection from './ProfileSection';
import BookingSection from './BookingSection';
import BoatSection from './BoatSection';

const AccountParts = () => {
  const { subpage } = useParams(); 
  return (
    <div>
      {subpage === 'profile' ? (
        <ProfileSection />
      ) : subpage === 'buchungen' ? (
        <BookingSection />
      ) : subpage === 'boote' ? (
        <BoatSection />
      ) : (
        <ProfileSection />
      )}
    </div>
  );
};

export default AccountParts;
