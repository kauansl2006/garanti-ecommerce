import ProductAdditionalInformation from "@/components/product-additional-information";
import ProductDescription from "@/components/product-description";
import ProductReviews from "@/components/product-reviews";
import ProductSpecification from "@/components/product-specification";

export const tabs = [
    { label: "DESCRIÇÃO", value: "description", content: ProductDescription },
    { label: "INFORMAÇÕES ADICIONAIS", value: "additional-information", content: ProductAdditionalInformation },
    { label: "ESPECIFICAÇÃO", value: "specification", content: ProductSpecification },
    { label: "REVIEWS", value: "reviews", content: ProductReviews },
];