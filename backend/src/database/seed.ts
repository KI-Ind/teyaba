import { connectDB } from './connect';
import { Category } from '../models/Category';
import { MenuItem } from '../models/MenuItem';

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Category.deleteMany({});
    await MenuItem.deleteMany({});

    // Create categories
    const categories = await Category.create([
      {
        name: 'Entrées',
        description: 'Découvrez nos entrées traditionnelles marocaines',
        translations: {
          en: {
            name: 'Starters',
            description: 'Discover our traditional Moroccan starters'
          },
          fr: {
            name: 'Entrées',
            description: 'Découvrez nos entrées traditionnelles marocaines'
          },
          es: {
            name: 'Entrantes',
            description: 'Descubre nuestros entrantes tradicionales marroquíes'
          },
          ar: {
            name: 'المقبلات',
            description: 'اكتشف مقبلاتنا المغربية التقليدية'
          },
          pt: {
            name: 'Entradas',
            description: 'Descubra nossas entradas tradicionais marroquinas'
          }
        }
      },
      {
        name: 'Plats Principaux',
        description: 'Nos spécialités principales',
        translations: {
          en: {
            name: 'Main Courses',
            description: 'Our main specialties'
          },
          fr: {
            name: 'Plats Principaux',
            description: 'Nos spécialités principales'
          },
          es: {
            name: 'Platos Principales',
            description: 'Nuestras especialidades principales'
          },
          ar: {
            name: 'الأطباق الرئيسية',
            description: 'تخصصاتنا الرئيسية'
          },
          pt: {
            name: 'Pratos Principais',
            description: 'Nossas especialidades principais'
          }
        }
      }
    ]);

    // Create menu items
    await MenuItem.create([
      {
        category: categories[0]._id,
        name: 'Pastilla au Poulet',
        description: 'Feuilleté sucré-salé au poulet et aux amandes',
        price: 12.00,
        imageUrl: 'https://images.unsplash.com/photo-1577104603560-b534999873a9?auto=format&fit=crop&q=80',
        translations: {
          en: {
            name: 'Chicken Pastilla',
            description: 'Sweet and savory chicken and almond pastry'
          },
          fr: {
            name: 'Pastilla au Poulet',
            description: 'Feuilleté sucré-salé au poulet et aux amandes'
          },
          es: {
            name: 'Pastela de Pollo',
            description: 'Hojaldre dulce y salado de pollo y almendras'
          },
          ar: {
            name: 'بسطيلة الدجاج',
            description: 'فطيرة حلوة ومالحة بالدجاج واللوز'
          },
          pt: {
            name: 'Pastilla de Frango',
            description: 'Massa folhada doce e salgada com frango e amêndoas'
          }
        }
      }
    ]);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();