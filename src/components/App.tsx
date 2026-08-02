import { motion } from "framer-motion";
import { Smartphone, Download, Github } from "lucide-react";
import image1 from "../assets/images/money.jpg";
import image2 from "../assets/images/sub.jpg";
const APPS = [
  {
    id: 1,
    title: "Money Manager",
    description:
      "A modern personal finance application built with React Native and Expo. Manage income, expenses, assets, budgets, reports and investments in one place.",
    image: "/images/money-manager.png", // add screenshot
    apk: "https://drive.google.com/file/d/17b5j21bd55hFSgIhdnbcwdIDC_450XKl/view?usp=sharing",
    github: "https://github.com/jishnuMgit/MyWallet",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Expo Router",
    ],
  },
  {
    id: 2,
    title: "Subscription Manager",
    description:
      "Track monthly subscriptions, renewal dates, billing cycles and expenses with a clean mobile interface.",
    image: "/images/subscription-manager.png", // add screenshot
    apk: "https://drive.google.com/file/d/13iHFHIlvOwoj6PudNpzNivjlKR5m2zHz/view?usp=sharing",
    github: "https://github.com/jishnuMgit/Subscription_ReactNative",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
    ],
  },
];

export default function Apps() {
  return (
    <section id="apps" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Mobile Apps</h2>

        <p className="section-subtitle">
          React Native applications built with Expo
        </p>
      </motion.div>

      <div className="mt-10 space-y-8">
        {APPS.map((app) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <div className="grid gap-8 md:grid-cols-2">

              <div className="overflow-hidden">
                <img
                  src={app.id === 1 ? image1 : image2}
                  alt={app.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8">

                <div className="mb-4 flex items-center gap-3">

                  <div className="rounded-full bg-accent/10 p-3">
                    <Smartphone className="h-6 w-6 text-accent" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {app.title}
                  </h3>

                </div>

                <p className="text-muted-foreground">
                  {app.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {app.stack.map((tech) => (
                    <span
                      key={tech}
                      className="pill"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-8 flex gap-4">

                  <a
                    href={app.apk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-white transition hover:opacity-90"
                  >
                    <Download className="h-5 w-5" />
                    Download APK
                  </a>

                  <a
                    href={app.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 transition hover:bg-muted"
                  >
                    <Github className="h-5 w-5" />
                    Source Code
                  </a>

                </div>

              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}