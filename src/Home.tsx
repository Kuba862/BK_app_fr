import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
  HomeContainer,
  HeroSection,
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  CTASection,
  CTAButton,
} from './style/Home';
import { AuthContext } from './context/authContext';


const Home = () => {

  const { auth } = useContext(AuthContext);

  return (
    <HomeContainer>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Twórz. Edytuj. Eksportuj. 📝
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Prosty i intuicyjny edytor dokumentów HTML
        </motion.p>
      </HeroSection>
      <FeaturesGrid>
        <FeatureCard>
          <IconWrapper>✍️</IconWrapper>
          <h3>Edytor WYSIWYG</h3>
          <p>Twórz dokumenty bez znajomości HTML</p>
        </FeatureCard>
        <FeatureCard>
          <IconWrapper>💾</IconWrapper>
          <h3>Moliwość zapisu</h3>
          <p>Twoja praca jest bezpieczna</p>
        </FeatureCard>
        <FeatureCard>
          <IconWrapper>⬇️</IconWrapper>
          <h3>Eksport do HTML</h3>
          <p>Pobierz dokument w formacie HTML</p>
        </FeatureCard>
        <FeatureCard>
          <IconWrapper>📱</IconWrapper>
          <h3>Responsywność</h3>
          <p>Pracuj na dowolnym urządzeniu</p>
        </FeatureCard>
      </FeaturesGrid>
      {!auth && (
        <CTASection>
        <h2>Rozpocznij za darmo</h2>
        <p>Nie wymaga instalacji. Zacznij tworzyć dokumenty już teraz.</p>
        <CTAButton to="register">Rozpocznij</CTAButton>
      </CTASection>
      )}
    </HomeContainer>
  );
};

export default Home;
