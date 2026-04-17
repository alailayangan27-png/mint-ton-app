import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";

export default function App() {
  const [tonConnectUI] = useTonConnectUI();

  const mint = async () => {
    try {
      await tonConnectUI.sendTransaction({
        validUntil: Math.floor(Date.now() / 1000) + 60,
        messages: [
          {
            address: "UQAPRU6cHYSkS8hIxl-zbcts9yt8_GtYcSh_R0nbYnWL5lFX", // WALLET KAMU
            amount: "100000000" // 0.1 TON
          }
        ]
      });
    } catch (e) {
      console.log("cancel / error");
    }
  };

  return (
    <div style={{
      color:"#fff",
      textAlign:"center",
      paddingTop:"50px"
    }}>
      <h1>Mint TON</h1>

      <TonConnectButton />

      <button
        onClick={mint}
        style={{
          marginTop:"30px",
          padding:"15px 25px",
          fontSize:"18px",
          background:"#00f2ff",
          border:"none",
          borderRadius:"10px"
        }}
      >
        Mint 0.1 TON
      </button>
    </div>
  );
}
