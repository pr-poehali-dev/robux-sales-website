import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const recentPurchases = [
    { username: 'ProGamer2024', amount: 800, time: '2 минуты назад' },
    { username: 'CoolPlayer123', amount: 1700, time: '5 минут назад' },
    { username: 'MegaBuilder99', amount: 400, time: '8 минут назад' },
    { username: 'RobloxMaster', amount: 4500, time: '12 минут назад' },
    { username: 'DiamondHunter', amount: 800, time: '15 минут назад' },
    { username: 'PixelWarrior', amount: 1700, time: '18 минут назад' },
  ];

  useEffect(() => {
    const showRandomPurchase = () => {
      const randomPurchase = recentPurchases[Math.floor(Math.random() * recentPurchases.length)];
      toast({
        title: '🎉 Новая покупка!',
        description: `${randomPurchase.username} купил ${randomPurchase.amount} Robux ${randomPurchase.time}`,
        duration: 4000,
      });
    };

    const interval = setInterval(showRandomPurchase, 5000);
    const initialTimeout = setTimeout(showRandomPurchase, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [toast]);

  const packages = [
    { id: 1, amount: 400, price: 99, badge: 'СТАРТ', popular: false },
    { id: 2, amount: 800, price: 189, badge: 'ХИТ', popular: true },
    { id: 3, amount: 1700, price: 349, badge: 'ВЫГОДА', popular: false },
    { id: 4, amount: 4500, price: 899, badge: 'ПРЕМИУМ', popular: false },
  ];

  const reviews = [
    { id: 1, name: 'Даниил', rating: 5, text: 'Моментальная доставка! Робуксы пришли за 2 минуты', avatar: '🎮' },
    { id: 2, name: 'Анастасия', rating: 5, text: 'Лучший сервис для покупки Robux, пользуюсь уже год', avatar: '🌟' },
    { id: 3, name: 'Максим', rating: 5, text: 'Честные цены и быстрая поддержка 24/7', avatar: '🚀' },
    { id: 4, name: 'София', rating: 5, text: 'Купила для братика, всё пришло мгновенно!', avatar: '💎' },
  ];

  const handleBuyClick = (pkg: typeof packages[0]) => {
    setSelectedPackage(pkg.id);
    const registerSection = document.getElementById('register');
    registerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '🎉 Заказ принят!',
      description: 'Робуксы будут доставлены в течение 5 минут',
    });
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-2xl">
                🎮
              </div>
              <span className="text-2xl font-bold">RobuxShop</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#packages" className="hover:text-primary transition-colors">Пакеты</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
              <Button className="bg-primary hover:bg-primary/90">Купить Robux</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-4 py-2 bg-secondary hover:bg-secondary/90">
              ⚡ Автоматическая доставка за 2 минуты
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Купи Robux<br />
              <span className="text-primary">Быстро и Безопасно</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Официальная интеграция с Roblox API · Более 10 000 довольных клиентов
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-pulse-glow">
                <Icon name="Zap" className="mr-2" size={24} />
                Купить сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Icon name="MessageCircle" className="mr-2" size={24} />
                Поддержка 24/7
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас?</h2>
            <p className="text-xl text-muted-foreground">Надёжно, быстро, выгодно</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Мгновенная доставка</CardTitle>
                <CardDescription className="text-base">
                  Робуксы приходят на аккаунт автоматически через 2-5 минут после оплаты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">100% безопасность</CardTitle>
                <CardDescription className="text-base">
                  Официальная интеграция с Roblox API, защищённые платежи и гарантия возврата
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl mb-2">Лучшие цены</CardTitle>
                <CardDescription className="text-base">
                  Конкурентные цены на все пакеты, регулярные акции и скидки для постоянных клиентов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Поддержка 24/7</CardTitle>
                <CardDescription className="text-base">
                  Команда поддержки всегда на связи в Telegram и Email, ответим за 5 минут
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">10 000+ клиентов</CardTitle>
                <CardDescription className="text-base">
                  Тысячи довольных игроков уже получили свои Robux через наш сервис
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl mb-2">Проверенный сервис</CardTitle>
                <CardDescription className="text-base">
                  Работаем с 2020 года, рейтинг 4.9/5 и сотни положительных отзывов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выбери свой пакет</h2>
            <p className="text-xl text-muted-foreground">Моментальная доставка на твой аккаунт</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`hover-lift cursor-pointer transition-all ${
                  pkg.popular ? 'border-primary border-2 shadow-2xl shadow-primary/20' : ''
                }`}
              >
                <CardHeader>
                  {pkg.popular && (
                    <Badge className="w-fit mb-2 bg-primary">🔥 ПОПУЛЯРНЫЙ</Badge>
                  )}
                  <Badge className="w-fit mb-3 bg-secondary text-sm">{pkg.badge}</Badge>
                  <CardTitle className="text-4xl font-bold mb-2">
                    {pkg.amount.toLocaleString()}
                  </CardTitle>
                  <CardDescription className="text-2xl font-semibold text-foreground">
                    Robux
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">₽{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">
                      {(pkg.price / pkg.amount).toFixed(2)} ₽ за 1 Robux
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                    onClick={() => handleBuyClick(pkg)}
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    Купить сейчас
                  </Button>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Доставка за 2-5 минут</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Официальный API Roblox</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>Гарантия возврата</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Более 10 000 довольных игроков</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-foreground/80">
                    "{review.text}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-card p-6 rounded-lg border">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Клиентов</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Рейтинг</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold mb-2">Оформить заказ</CardTitle>
                <CardDescription className="text-lg">
                  {selectedPackage
                    ? `Выбран пакет: ${packages.find(p => p.id === selectedPackage)?.amount} Robux`
                    : 'Заполните форму и получите Robux на свой аккаунт'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username">Ваш ник в Roblox</Label>
                    <Input
                      id="username"
                      placeholder="PlayerName123"
                      required
                      className="text-lg py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email для чека</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@mail.ru"
                      required
                      className="text-lg py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="package">Выберите пакет</Label>
                    <select
                      id="package"
                      className="w-full rounded-md border border-input bg-background px-3 py-3 text-lg"
                      defaultValue={selectedPackage || ''}
                    >
                      <option value="">Выберите количество Robux</option>
                      {packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.amount} Robux - ₽{pkg.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <Icon name="CreditCard" className="mr-2" size={20} />
                    Перейти к оплате
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Lock" size={16} />
                    <span>Безопасная оплата через защищённое соединение</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Связаться с нами</h2>
              <p className="text-xl text-muted-foreground">Мы всегда на связи и готовы помочь</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name="MessageCircle" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Telegram</div>
                      <div className="text-sm text-muted-foreground">@robuxshop_support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">support@robuxshop.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-sm text-muted-foreground">24/7 без выходных</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Написать нам</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Ваше имя</Label>
                      <Input id="contact-name" placeholder="Иван" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="ivan@mail.ru" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea id="message" placeholder="Ваш вопрос..." rows={4} />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-2xl">
                🎮
              </div>
              <span className="text-xl font-bold">RobuxShop</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 RobuxShop. Создатель: John_Deo542
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;