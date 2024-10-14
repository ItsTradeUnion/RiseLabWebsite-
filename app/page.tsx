import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Rocket, Brain, Code, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Propulsez votre Entreprise avec RISE Lab
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Nous créons des solutions innovantes pour élever votre marque dans
            le paysage numérique.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 transition-transform hover:scale-105"
          >
            Commencer Maintenant
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Rocket className="w-12 h-12 mb-4 text-primary" />}
              title="Growth et Marketing"
              description="Boostez votre croissance avec nos stratégies marketing innovantes."
              services={[
                'Génération de Leads',
                'Growth Hacking',
                'Social Media Management',
              ]}
            />
            <ServiceCard
              icon={<Brain className="w-12 h-12 mb-4 text-primary" />}
              title="Solutions IA"
              description="Optimisez vos opérations avec nos solutions d'intelligence artificielle avancées."
              services={[
                'Développement de Chatbots',
                'Assistant Personnel IA',
                "Optimisation d'Entreprise par IA",
              ]}
            />
            <ServiceCard
              icon={<Code className="w-12 h-12 mb-4 text-primary" />}
              title="Développement Sur Mesure"
              description="Créez des applications web personnalisées pour répondre à vos besoins uniques."
              services={[
                'Applications Web Personnalisées',
                'MVP Rapide',
                'Intégration de Systèmes',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Ils nous font confiance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex justify-center">
                <Image
                  src={`https://via.placeholder.com/150x50?text=Logo${num}`}
                  alt={`Client Logo ${num}`}
                  width={150}
                  height={50}
                  className="opacity-50 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Propulser votre Croissance ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez comment RISE LABS peut transformer votre entreprise grâce
            à notre expertise en marketing, IA et développement sur mesure.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 transition-transform hover:scale-105"
          >
            Réserver une Consultation Gratuite
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Notre Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertiseCard
              title="10+ Ans d'Expérience"
              description="Une décennie d'excellence dans le domaine du numérique."
            />
            <ExpertiseCard
              title="Résultats Mesurables"
              description="Des stratégies qui produisent des résultats tangibles pour votre entreprise."
            />
            <ExpertiseCard
              title="Support Dédié"
              description="Une équipe d'experts à votre disposition pour un accompagnement personnalisé."
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Contactez-nous
          </h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Réserver une Consultation Gratuite</CardTitle>
                <CardDescription>
                  Découvrez comment nous pouvons propulser votre entreprise vers
                  de nouveaux sommets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nom
                    </label>
                    <Input id="name" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>
                  <Button className="w-full">Envoyer</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, services }) {
  return (
    <Card className="transition-transform hover:scale-105">
      <CardHeader>
        <div className="flex justify-center">{icon}</div>
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ExpertiseCard({ title, description }) {
  return (
    <Card className="transition-transform hover:scale-105">
      <CardHeader>
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
