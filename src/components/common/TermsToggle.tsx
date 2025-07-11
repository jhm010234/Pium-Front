import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLocale } from "../../context/LanguageContext";

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;
  background-color: white;
`;

const Label = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`;

const Content = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #555;
  margin-top: 1rem;
  line-height: 1.6;
`;

const Bullet = styled.li``;

const TermsToggle = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  return (
    <Wrapper>
      <Header
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        <Label>{t.reviewGuide.title}</Label>
        {open ? <IoIosArrowUp size={22} /> : <IoIosArrowDown size={30} />}
      </Header>

      {open && (
        <Content>
          <Bullet>• {t.reviewGuide.bullets[0]}</Bullet>
          <Bullet>• {t.reviewGuide.bullets[1]}</Bullet>
          <Bullet>• {t.reviewGuide.bullets[2]}</Bullet>
          <Bullet>• {t.reviewGuide.bullets[3]}</Bullet>
          <Bullet>• {t.reviewGuide.bullets[4]}</Bullet>
          <Bullet>• {t.reviewGuide.bullets[5]}</Bullet>
        </Content>
      )}
    </Wrapper>
  );
};

export default TermsToggle;
