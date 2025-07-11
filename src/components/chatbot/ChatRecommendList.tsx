import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocale } from "../../context/LanguageContext";

interface RecommendItem {
  itemId: number;
  itemName: string;
  imgUrl: string;
  discountPrice: number;
}

interface Props {
  items: RecommendItem[];
}

const ChatRecommendList: React.FC<Props> = ({ items }) => {
  const navigate = useNavigate();
  const { t } = useLocale();
  const scrollContainerStyle: React.CSSProperties = {
    display: "flex",
    overflowX: "auto",
    gap: "0.4rem",
    padding: "0.5rem 0",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  };

  return (
    <>
      <style>
        {`
          .chat-recommend-scroll::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="chat-recommend-scroll" style={scrollContainerStyle}>
        {items.map((item) => (
          <div
            key={item.itemId}
            onClick={() => navigate(`/product-detail?itemId=${item.itemId}`)}
            style={{
              cursor: "pointer",
              width: "180px",
              fontSize: "0.75rem",
              flexDirection: "column",
              alignItems: "center",
              padding: "0.5rem 0rem",
              borderRadius: "0.75rem",
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "120px",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={
                  item.imgUrl ??
                  "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0017/A00000017330210ko.jpg"
                }
                alt={item.itemName}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                }}
              />
            </div>
            <div
              style={{
                color: "#000",
                fontSize: "0.9rem",
                fontWeight: "bold",
                textAlign: "center",
                alignSelf: "center",
                marginBottom: "0.25rem",
              }}
            >
              {item.discountPrice.toLocaleString()}
              {t.order.won}
            </div>
            <div
              style={{
                fontWeight: "normal",
                maxWidth: "117px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                alignSelf: "flex-start",
                paddingRight: "0.3rem",
                paddingLeft: "0.3rem",
              }}
              title={item.itemName}
            >
              {item.itemName}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatRecommendList;
