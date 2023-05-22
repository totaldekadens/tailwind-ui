import CenteredTwoGrid from "@/components/marketing/feature/Centered-two-grid";
import ContainedInPanel from "@/components/marketing/feature/Contained-in-panel";
import OffsetTwoGrid from "@/components/marketing/feature/Offset-two-grid";
import OffsetWithFeatureList from "@/components/marketing/feature/Offset-with-feature-list";
import Simple from "@/components/marketing/feature/Simple";
import SimpleThreeColumnWithLargeIcons from "@/components/marketing/feature/Simple-three-column-with-large-icons";
import SimpleThreeColumnWithLargeIconsOnDark from "@/components/marketing/feature/Simple-three-column-with-large-icons-on-dark";
import SimpleThreeColumWithSmallIconsOnDark from "@/components/marketing/feature/Simple-three-column-with-small-icons-on-dark";
import SimpleTwoColumnWithSmallIconsOnDark from "@/components/marketing/feature/Simple-two-column-with-small-icons-on-dark";
import WithProductScreenshotOnDark from "@/components/marketing/feature/With product screenshot on dark";
import WithCodeExamplePanel from "@/components/marketing/feature/With-code-example-panel";
import WithLargeScreenshot from "@/components/marketing/feature/With-large-screenshot";
import WithLargeScreenshotOnDark from "@/components/marketing/feature/With-large-screenshot-on-dark";
import WithProductScreenshot from "@/components/marketing/feature/With-product-screenshot";
import WithProductScreenshotOnLeft from "@/components/marketing/feature/With-product-screenshot-on-left";
import WithProductScreenshotPanel from "@/components/marketing/feature/With-product-screenshot-panel";
import WithTestimonial from "@/components/marketing/feature/With-testimonial";
import SimpleCentered from "@/components/marketing/hero/Simple-centered";
import SimpleCenteredWithBackgroundImage from "@/components/marketing/hero/Simple-centered-with-background-image";
import SplitWithCodeExample from "@/components/marketing/hero/Split-with-code-example";
import SplitWithImage from "@/components/marketing/hero/Split-with-image";
import SplitWithScreenshot from "@/components/marketing/hero/Split-with-screenshot";
import SplitWithScreenshotOnDark from "@/components/marketing/hero/Split-with-screenshot-on-dark";
import WithAngledImageOnRight from "@/components/marketing/hero/With-angled-image-on-right";
import WithAppScreenshot from "@/components/marketing/hero/With-app-screenshot";
import WithAppScreenshotOnDark from "@/components/marketing/hero/With-app-screenshot-on-dark";
import WithImageTiles from "@/components/marketing/hero/With-image-tiles";
import WithOffsetImage from "@/components/marketing/hero/With-offset-image";
import WithPhoneMockup from "@/components/marketing/hero/With-phone-mockup";
import FourTiersWithToggle from "@/components/marketing/pricing/Four-tiers-with-toggle";
import SinglePriceWithDetails from "@/components/marketing/pricing/Single-price-with-details";
import ThreeTiers from "@/components/marketing/pricing/Three-tiers";
import ThreeTiersWithEmphasizedTier from "@/components/marketing/pricing/Three-tiers-with-emphasized-tier";
import ThreeTiersWithFeatureComparison from "@/components/marketing/pricing/Three-tiers-with-feature-comparison";
import ThreeTiersWithToggle from "@/components/marketing/pricing/Three-tiers-with-toggle";
import ThreeTiersWithToggleOnDark from "@/components/marketing/pricing/Three-tiers-with-toggle-on-dark";
import ThreeTiersWithDividers from "@/components/marketing/pricing/ThreeTiersWithDividers";
import TwoTiersWithExtraTier from "@/components/marketing/pricing/Two-tiers-with-extra-tier";
import TwoTiersWithEmphasizedTier from "@/components/marketing/pricing/Two-tiers-with-emphasized-tier";
import TwoTiers from "@/components/marketing/pricing/Two-tiers";
import WithComparisonTable from "@/components/marketing/pricing/WithComparisonTable";
import WithComparisonTableOnDark from "@/components/marketing/pricing/With-comparison-table-on-dark";
export const componentList = [
  {
    heading: "Heros",
    slug: "hero",
    description1:
      "Samtliga komponenter hittar du på /components/marketing/hero",
    description2:
      "Vissa av komponenterna har även headers med i koden. De är dock för tillfället utkommenterade",
    components: [
      {
        component: SimpleCenteredWithBackgroundImage,
        title: "SimpleCenteredWithBackgroundImage",
      },
      { component: SplitWithCodeExample, title: "SplitWithCodeExample" },
      { component: SplitWithImage, title: "SplitWithImage" },
      { component: SimpleCentered, title: "SimpleCentered" },
      {
        component: SplitWithScreenshotOnDark,
        title: "SplitWithScreenshotOnDark",
      },
      { component: SplitWithScreenshot, title: "SplitWithScreenshot" },
      { component: WithAngledImageOnRight, title: "WithAngledImageOnRight" },
      { component: WithAppScreenshotOnDark, title: "WithAppScreenshotOnDark" },
      { component: WithAppScreenshot, title: "WithAppScreenshot" },
      { component: WithImageTiles, title: "WithImageTiles" },
      { component: WithOffsetImage, title: "WithOffsetImage" },
      { component: WithPhoneMockup, title: "WithPhoneMockup" },
    ],
  },
  {
    heading: "Features",
    slug: "feature",
    description1:
      "Samtliga komponenter hittar du på /components/marketing/feature",
    description2:
      "Vissa av komponenterna har även headers med i koden. De är dock för tillfället utkommenterade",
    components: [
      {
        component: CenteredTwoGrid,
        title: "CenteredTwoGrid",
      },
      { component: ContainedInPanel, title: "ContainedInPanel" },
      { component: OffsetTwoGrid, title: "OffsetTwoGrid" },
      { component: OffsetWithFeatureList, title: "OffsetWithFeatureList" },
      {
        component: SimpleThreeColumnWithLargeIconsOnDark,
        title: "SimpleThreeColumnWithLargeIconsOnDark",
      },
      {
        component: SimpleThreeColumnWithLargeIcons,
        title: "SimpleThreeColumnWithLargeIcons",
      },
      {
        component: SimpleThreeColumWithSmallIconsOnDark,
        title: "SimpleThreeColumWithSmallIconsOnDark",
      },
      {
        component: SimpleThreeColumWithSmallIconsOnDark,
        title: "SimpleThreeColumWithSmallIcons",
      },
      {
        component: SimpleTwoColumnWithSmallIconsOnDark,
        title: "SimpleTwoColumnWithSmallIconsOnDark",
      },
      { component: Simple, title: "Simple" },
      { component: WithProductScreenshot, title: "WithProductScreenshot" },
      { component: WithCodeExamplePanel, title: "WithCodeExamplePanel" },
      { component: WithLargeScreenshot, title: "WithLargeScreenshot" },
      {
        component: WithLargeScreenshotOnDark,
        title: "WithLargeScreenshotOnDark",
      },
      { component: WithProductScreenshot, title: "WithProductScreenshot" },
      {
        component: WithProductScreenshotOnDark,
        title: "WithProductScreenshotOnDark",
      },
      {
        component: WithProductScreenshotOnLeft,
        title: "WithProductScreenshotOnLeft",
      },
      {
        component: WithProductScreenshotPanel,
        title: "WithProductScreenshotPanel",
      },
      {
        component: WithTestimonial,
        title: "WithTestimonial",
      },
    ],
  },
  {
    heading: "Pricing",
    slug: "pricing",
    description1:
      "Samtliga komponenter hittar du på /components/marketing/pricing",
    description2: "",
    components: [
      {
        component: FourTiersWithToggle,
        title: "FourTiersWithToggle",
      },
      {
        component: SinglePriceWithDetails,
        title: "SinglePriceWithDetails",
      },
      {
        component: ThreeTiersWithEmphasizedTier,
        title: "ThreeTiersWithEmphasizedTier",
      },
      {
        component: ThreeTiersWithFeatureComparison,
        title: "ThreeTiersWithFeatureComparison",
      },
      {
        component: ThreeTiersWithToggle,
        title: "ThreeTiersWithToggle",
      },
      {
        component: ThreeTiersWithToggleOnDark,
        title: "ThreeTiersWithToggleOnDark",
      },
      {
        component: ThreeTiers,
        title: "ThreeTiers",
      },
      {
        component: ThreeTiersWithDividers,
        title: "ThreeTiersWithDividers",
      },
      {
        component: TwoTiersWithExtraTier,
        title: "TwoTiersWithExtraTier",
      },
      {
        component: TwoTiersWithEmphasizedTier,
        title: "TwoTiersWithEmphasizedTier",
      },
      {
        component: TwoTiers,
        title: "TwoTiers",
      },
      {
        component: WithComparisonTable,
        title: "WithComparisonTable",
      },
      {
        component: WithComparisonTableOnDark,
        title: "WithComparisonTableOnDark",
      },
    ],
  },
];
