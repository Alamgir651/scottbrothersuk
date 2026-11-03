"use client";

import { useState } from "react";

type Q = {
  label: string;
  name: string;
  required?: boolean;
  multiple?: boolean; // checkboxes instead of radios
  options?: string[];
  note?: string; // textarea placeholder
  input?: string; // single text input placeholder
};

// Questions and options copied from the live "Design Briefing Client Form"
const questions: Q[] = [
  { label: "Full Name", name: "name", required: true, input: "Your Full Name" },
  { label: "Full Address", name: "address", required: true, input: "Your Full Address (Including Postcode)" },
  { label: "Contact Number", name: "phone", required: true, input: "Your Phone Number" },
  { label: "Email Address", name: "email", required: true, input: "Your Email Address" },
  {
    label: "SIZE OF PROJECT (measure the width and length of the area in meters from the widest points and times by each other on a calculator)",
    name: "size",
    required: true,
    options: ["Under 100m2", "101m2 - 200m2", "201m2 - 400m2", "401m2 +", "Unusual Shape and/or Varying Levels/Sloped"],
  },
  {
    label: "WILL THE GARDEN BE REGULARLY USED BY",
    name: "users",
    required: true,
    multiple: true,
    options: ["Children", "Disabled", "Allergy Sufferers", "Pets"],
    note: "Please note any specific needs, for whom and their age range.",
  },
  {
    label: "WHAT WILL BE THE AREAS MAIN USES",
    name: "uses",
    required: true,
    multiple: true,
    options: ["Entertaining", "All For The Kids", "Alfresco Dining", "Reading Or Working", "Relaxing & Sunbathing", "Veggie Plots & Serious Gardening"],
    note: "Other - Please explain",
  },
  { label: "HOW MANY PEOPLE DAY TO DAY WILL BE USING THE SPACE", name: "people", required: true, options: ["0-6", "6-10", "10-20", "20+"] },
  {
    label: "WHAT FEEL/STYLE ARE YOU TRYING TO ACHIEVE",
    name: "style",
    required: true,
    multiple: true,
    options: [
      "Ultra Modern / Contemporary",
      "Traditional / Cottage",
      "Formal / Luxury",
      "Coastal / Seaside",
      "Eco / Wildlife Friendly",
      "Japanese / Asian Zen",
      "Urban / Industrial",
      "Other",
    ],
    note: "Other - Please describe",
  },
  {
    label: "COLOUR PALLET PREFERENCES",
    name: "colours",
    required: true,
    multiple: true,
    options: [
      "Monocrome (Blacks, Greys & Whites)",
      "Neutral (Woods, Browns & Creams)",
      "Rainbow (White Base With Pops of Various Colours)",
      "Modern Mix (Blacks, Whites, Woods, Greys & Beige)",
    ],
    note: "Other - Please descirbe",
  },
  { label: "SHAPES AND LINES PREFERENCE", name: "shapes", required: true, multiple: true, options: ["Circles & Curves", "Squares & Straights", "Hexagons & Angles"] },
  { label: "ARE THERE ANY EXISITING FEATURES OR FOLIAGE TO REMAIN IN PLACE", name: "existing", note: "Please describe" },
  {
    label: "WOULD YOU LIKE ANY NEW FEATURES?",
    name: "features",
    required: true,
    multiple: true,
    options: [
      "Pergola / Gazebo / Canopy / Arch",
      "BBQ Area / Outdoor Kitchen",
      "Hot Tub / Pool / Spa Area",
      "Pond / Water Feature",
      "Children's Play Equipment",
      "Raised Planters",
      "Seating Area",
      "Fire Pit",
      "Garden Office / Summerhouse",
      "Veggie Plot / Greenhouse",
    ],
  },
  {
    label: "WHICH GROUND COVERINGS ARE PREFERABLE",
    name: "ground",
    required: true,
    multiple: true,
    options: [
      "Patio (Sandstone, Porcelain , Concrete etc.)",
      "Decking (Hardwood, Softwood, Composite etc.)",
      "Paving (Blocks, Cobbles, Setts etc.)",
      "Decorative Stone (Gravel, Pebbles, Cobbles etc.)",
      "Playground Rubber / Bark Mulch",
    ],
  },
  { label: "GRASS OPTIONS", name: "grass", required: true, options: ["Real Lawn Grass", "Artificial Grass", "No Grass Works"] },
  {
    label: "FENCING OPTIONS",
    name: "fencing",
    required: true,
    options: ["Keeping Existing Fencing", "New Fencing To Be Installed", "No Fencing Works"],
    note: "Please specify current or new fencing style preferred (eg, Feather edge, Venetian/horizontal, Standard panels etc.)",
  },
  { label: "STORAGE OPTIONS", name: "storage", required: true, multiple: true, options: ["Shed", "Bin-Store", "Bike-Store", "Compost Bin", "No Storage Needed"] },
  { label: "ARE THERE ANY SPECIFIC PLANTS / TREES YOU ARE WANTING FEATURED?", name: "plants", note: "Species Of Plant / Tree" },
  { label: "GENERAL NOTES", name: "notes", note: "Do you have anything else to add, mention or specify? Sunny Spots? " },
  {
    label: "CONSTRUCTION BUDGET",
    name: "budget",
    required: true,
    options: ["£1,000 - £5,000", "£5,000 - £10,000", "£10,000 - £20,000", "£20,000 - £30,000", "£30,000 - £40,000", "£40,000 - £50,000", "£50,000 +"],
    note: "Any Further Budget Information",
  },
];

const field = "mt-3 block w-full rounded-sm border border-ink/20 bg-white px-4 py-3 placeholder:text-ink/40 focus:border-blue focus:outline-none";

// Live labels are in capitals; show them in sentence case but keep the wording
const sentence = (s: string) => (s === s.toUpperCase() ? s.charAt(0) + s.slice(1).toLowerCase() : s);

export default function ClientForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="rounded-sm border-2 border-amber p-10">
        <p className="display text-4xl text-blue">Thank you!</p>
        <p className="mt-4 text-lg">Your completed form has been sent to us.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: email the form (step 2 page on the live site) when this goes live
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-5 rounded-sm bg-limewash p-6 sm:grid-cols-2 md:p-8">
        {questions
          .filter((q) => q.input)
          .map((q) => (
            <label key={q.name} className="font-semibold">
              {q.label}*
              <input required name={q.name} type={q.name === "email" ? "email" : q.name === "phone" ? "tel" : "text"} placeholder={q.input} className={field} />
            </label>
          ))}
      </div>

      {questions
        .filter((q) => !q.input)
        .map((q) => (
          <fieldset key={q.name} className="rounded-sm bg-limewash p-6 md:p-8">
            <legend className="float-left w-full font-semibold">
              {sentence(q.label)}
              {q.required && "*"}
            </legend>
            {q.options && (
              <div className="clear-both grid gap-2 pt-4 sm:grid-cols-2">
                {q.options.map((o, i) => (
                  <label
                    key={o}
                    className="flex cursor-pointer items-start gap-3 rounded-sm border border-ink/15 bg-white px-4 py-3 has-[:checked]:border-blue has-[:checked]:bg-blue/5"
                  >
                    <input
                      type={q.multiple ? "checkbox" : "radio"}
                      name={q.name}
                      value={o}
                      required={!q.multiple && q.required && i === 0}
                      className="mt-1 h-4 w-4 shrink-0 accent-blue"
                    />
                    <span>{o}</span>
                  </label>
                ))}
              </div>
            )}
            {q.note && <textarea name={`${q.name}_notes`} rows={3} placeholder={q.note} className={`${field} clear-both`} />}
          </fieldset>
        ))}

      <button type="submit" className="wide rounded-full bg-blue px-8 py-4 font-bold text-white transition-colors hover:bg-blue-deep">
        Submit form &amp; Move onto Step 2
      </button>
    </form>
  );
}
