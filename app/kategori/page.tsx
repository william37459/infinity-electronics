import { Suspense } from "react";
import CategoryPageContent from "./category-page-content";

export default function CategoryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryPageContent />
    </Suspense>
  );
}