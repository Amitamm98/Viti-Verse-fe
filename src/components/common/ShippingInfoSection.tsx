const FreeShippingIcon = () => (
  <svg fill="#ffffff" height="40" width="40" viewBox="0 0 24 24">
    <path d="M20 8h-3V4H3v13h2a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h1v-5l-3-4Zm-4-2v2H5V6h11Zm-7 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-3h-1a3 3 0 0 0-6 0H9a3 3 0 0 0-6 0H5v-7h14.34l2.66 3.55V15Z" />
  </svg>
);

const MoneyGuaranteeIcon = () => (
  <svg fill="#ffffff" height="40" width="40" viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 1 0 9.95 11H20a8 8 0 1 1-2.34-5.66L15 10h7V3l-2.47 2.47A9.96 9.96 0 0 0 12 2Zm1 6h-2v4h4v2h-6V8h4V6h2v2Z" />
  </svg>
);

const SupportIcon = () => (
  <svg fill="#ffffff" height="40" width="40" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12v5c0 1.66 1.34 3 3 3h2v-8H5v-1a7 7 0 0 1 14 0v1h-2v8h2c1.66 0 3-1.34 3-3v-5c0-5.52-4.48-10-10-10Z" />
  </svg>
);

const PaymentIcon = () => (
  <svg fill="#ffffff" height="40" width="40" viewBox="0 0 24 24">
    <path d="M2 5h20v14H2V5Zm18 12V9H4v8h16Zm0-10H4v2h16V7Zm-6 6h4v2h-4v-2Z" />
  </svg>
);

type InfoCardProps = {
  icon: React.ComponentType;
  title: string;
  subtitle: string;
};

const InfoCard = ({ icon: Icon, title, subtitle }: InfoCardProps) => (
  <div className="flex items-start gap-4 max-w-xs">
    <div className="mt-1">
      <Icon />
    </div>
    <div>
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-white text-sm">{subtitle}</p>
    </div>
  </div>
);

// Main Section
const ShippingInfoSection = () => {
  return (
    <section className="bg-black py-10 h-[200px] w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 justify-center items-center">
        <InfoCard
          icon={FreeShippingIcon}
          title="Free Shipping"
          subtitle="Free shipping for orders over ₹899"
        />
        <InfoCard
          icon={MoneyGuaranteeIcon}
          title="Money Guarantee"
          subtitle="Within 7 days for an exchange"
        />
        <InfoCard
          icon={SupportIcon}
          title="Online Support"
          subtitle="Within 30 days for an exchange"
        />
        <InfoCard
          icon={PaymentIcon}
          title="Flexible payments"
          subtitle="Pay with multiple methods"
        />
      </div>
    </section>
  );
};

export default ShippingInfoSection;
