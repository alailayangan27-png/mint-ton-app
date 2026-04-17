import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

export default function App() {
  const wallet = useTonWallet();

  return (
    <div style={{color:"#fff", textAlign:"center", marginTop:"50px"}}>
      <h1>TON Connect Test</h1>

      <TonConnectButton />

      {wallet && (
        <div style={{marginTop:"20px"}}>
          <p>Connected ✅</p>
          <p style={{fontSize:"12px"}}>
            {wallet.account.address}
          </p>
        </div>
      )}
    </div>
  );
}
