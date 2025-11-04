import React, { useState } from "react";
import PcosAssessment from "./PcosAssessment";
import CommunitySection from "./CommunitySection";
import ExpertHelp from "./ExpertHelp";
import LifestyleTips from "./LifestyleTips";

const keyFeatures = [
  {
    icon: "🌸",
    title: "Personalized PCOS Assessment",
    desc: "Quickly screen your risk and get tailored recommendations.",
    component: PcosAssessment,
  },
  {
    icon: "🤝",
    title: "Community Support",
    desc: "Join forums and groups to share stories and find encouragement.",
    component: CommunitySection,
  },
  {
    icon: "📅",
    title: "Book Expert Consultation",
    desc: "Find gynecologists, nutritionists, and therapists instantly.",
    component: ExpertHelp,
  },
  {
    icon: "💬",
    title: "24/7 Care Guidance",
    desc: "Get self-care resources and answers to your PCOS questions anytime.",
    component: LifestyleTips,
  },
];
export default function KeyFeaturesSection() {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);

  const toggleFeature = (idx) => {
    setSelectedFeatureIndex((prev) => (prev === idx ? null : idx));
  };

  const SelectedComponent =
    selectedFeatureIndex !== null ? keyFeatures[selectedFeatureIndex].component : null;

  return (
    <div>
      <div className="row g-4 mb-4">
        {keyFeatures.map((feature, idx) => (
          <div key={idx} className="col-md-6 col-lg-3">
            <div
              className="rounded-4 p-4 h-100 text-center shadow-sm zoom-in"
              style={{ background: "#fff8fa", cursor: "pointer" }}
              onClick={() => toggleFeature(idx)}
            >
              <div style={{ fontSize: "2.6rem", marginBottom: "0.5rem" }}>
                {feature.icon}
              </div>
              <div
                className="fw-bold mb-2"
                style={{ color: "#a259e8", fontSize: "1.16rem" }}
              >
                {feature.title}
              </div>
              <div style={{ color: "#444", fontSize: "1rem" }}>
                {feature.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {SelectedComponent && (
        <div className="p-4 mt-4" style={{ background: "#fafafa", borderRadius: 8 }}>
          <SelectedComponent />
        </div>
      )}
    </div>
  );
}
