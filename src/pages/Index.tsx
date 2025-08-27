import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">ANANDA SPACE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-primary transition">Почему мы</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition">О нас</button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-primary transition">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition">Контакты</button>
            </nav>
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (933) 611-32-28</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва, ул. Гагарина, 15</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>10:00-20:00</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-muted to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Студия пилатеса<br />
              <span className="text-secondary">Ananda Space</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-body">
              баланс тела и духа
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-body">
              Групповые и индивидуальные занятия, курсы реформер‑пилатеса
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection('contacts')}
            >
              Записаться на пробное занятие
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-primary mb-16">
            То, что делает нашу студию особенной
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Award',
                title: 'Академические преподаватели',
                description: 'с сертификатами STOTT, Polestar и др.'
              },
              {
                icon: 'Heart',
                title: 'Аутентичная атмосфера',
                description: 'и уютный интерьер студии'
              },
              {
                icon: 'Users',
                title: 'Маленькие группы',
                description: 'до 8 человек + персональные занятия'
              },
              {
                icon: 'Calendar',
                title: 'Удобное расписание',
                description: 'утро/вечер, онлайн/оффлайн'
              },
              {
                icon: 'Target',
                title: 'Тестовые и абонементы',
                description: 'на любой уровень'
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-muted border-0 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 font-body">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-primary mb-6">
            Индивидуально. Эффективно.
          </h3>
          <p className="text-xl text-center text-secondary mb-16">В вашем ритме</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Маты & базовый комплекс',
                description: 'упражнения для гибкости и осанки',
                icon: 'Activity'
              },
              {
                title: 'Реформер-класс',
                description: 'укрепление корпуса и глубоких мышц',
                icon: 'Dumbbell'
              },
              {
                title: 'Продвинутый Mat & reformer',
                description: 'для опытных',
                icon: 'TrendingUp'
              },
              {
                title: 'Приватные занятия',
                description: 'поддержка 1‑на‑1',
                icon: 'User'
              }
            ].map((service, index) => (
              <Card key={index} className="bg-white border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                  <CardDescription className="font-body text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => scrollToSection('contacts')}
                  >
                    подобрать время
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-primary mb-8">
            Опыт, знания и бережный подход
          </h3>
          <div className="space-y-6 text-lg text-gray-700 font-body leading-relaxed">
            <p className="text-xl text-secondary font-medium">
              В центре всего — не идеальные формы, а живое движение, в котором вы чувствуете себя лучше с каждым занятием
            </p>
            <p>
              Мы создали студию пилатеса как пространство, где можно остановиться, почувствовать тело и вернуться к себе.
            </p>
            <p>
              Работаем с разными уровнями подготовки, телами и задачами: от восстановления до укрепления.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-primary mb-6">
            С кем вы будете практиковать
          </h3>
          <p className="text-lg text-center text-gray-600 mb-16 font-body">
            Наш коллектив — сертифицированные преподаватели со стажем 5+ лет, надежные наставники для учеников любого уровня.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Анна Калинова', experience: '5+ лет опыта' },
              { name: 'Мария Михайлюк', experience: '7+ лет опыта' },
              { name: 'Кристина Шарпей', experience: '5+ года опыта' }
            ].map((instructor, index) => (
              <Card key={index} className="bg-white border-0 text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{instructor.name}</CardTitle>
                  <CardDescription className="font-body text-secondary">{instructor.experience}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-primary mb-16">
            Нам уже доверились
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Мария К., 34 года',
                review: 'Это не просто студия — это место, где телу спокойно, а голове легко. Никто не торопит, всё очень бережно. После каждого занятия ощущение, будто перезагрузилась.'
              },
              {
                name: 'Анна П., 29 лет',
                review: 'Раньше думала, что пилатес — это "что-то не для меня", но попробовав здесь, влюбилась. Тренеры всё объясняют понятно, помогают адаптироваться. И тело реально стало другим — крепче и легче.'
              },
              {
                name: 'Екатерина С., 41 год',
                review: 'Занимаюсь уже полгода, ушли боли в спине, улучшилась осанка. Колени перестали "ныть" после прогулок. Тренеры профессиональные и внимательные. Спасибо студии за чуткость и системный подход.'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-muted border-0">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-primary">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-body leading-relaxed">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4"
              onClick={() => scrollToSection('contacts')}
            >
              Подобрать время
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-8">Запишитесь на занятие</h3>
          <p className="text-xl mb-12 opacity-90 font-body">
            Свяжитесь с нами любым удобным способом
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Phone" size={24} />
                <span className="text-lg">+7 (933) 611-32-28</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="MapPin" size={24} />
                <span className="text-lg">г. Москва, ул. Гагарина, 15</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Clock" size={24} />
                <span className="text-lg">10:00-20:00</span>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <Icon name="MessageCircle" size={32} className="hover:opacity-75 cursor-pointer transition" />
              <Icon name="Instagram" size={32} className="hover:opacity-75 cursor-pointer transition" />
              <Icon name="Phone" size={32} className="hover:opacity-75 cursor-pointer transition" />
            </div>
          </div>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
          >
            Подобрать время
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-primary mb-4">ANANDA SPACE</h4>
              <p className="text-gray-400 font-body">Студия пилатеса для баланса тела и духа</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Навигация</h5>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('benefits')} className="block text-gray-400 hover:text-white transition">Почему мы</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition">Услуги</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition">О нас</button>
                <button onClick={() => scrollToSection('reviews')} className="block text-gray-400 hover:text-white transition">Отзывы</button>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (933) 611-32-28</p>
                <p>г. Москва, ул. Гагарина, 15</p>
                <p>10:00-20:00</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Соцсети</h5>
              <div className="flex space-x-4">
                <Icon name="MessageCircle" size={24} className="text-gray-400 hover:text-white cursor-pointer transition" />
                <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer transition" />
                <Icon name="Phone" size={24} className="text-gray-400 hover:text-white cursor-pointer transition" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition">Политика конфиденциальности</button>
              <button className="hover:text-white transition">Условия обслуживания</button>
            </div>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">© 2024 Ananda Space</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;