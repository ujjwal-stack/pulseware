/**
 * API Service Layer
 * Handles all API calls and data management
 */

class APIService {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users') || '[]');
        this.products = [
            {
                id: 1,
                name: 'iPhone 15 Pro',
                price: 999,
                category: 'smartphones',
                image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch',
                description: 'Latest iPhone with advanced features',
                stock: 50,
                rating: 4.8
            },
            {
                id: 2,
                name: 'MacBook Pro M3',
                price: 1999,
                category: 'laptops',
                image: 'https://images.squarespace-cdn.com/content/v1/54d696e5e4b05ca7b54cff5c/34127c4b-a72c-4363-a874-0ac0fab4ef82/Apple-MacBook-Pro-M3-Pro-and-M3-Max-hero.jpg',
                description: 'Powerful laptop for professionals',
                stock: 25,
                rating: 4.9
            },
            {
                id: 3,
                name: 'AirPods Pro (2nd Gen)',
                price: 249,
                category: 'audio',
                image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83',
                description: 'Premium wireless earbuds with noise cancellation',
                stock: 100,
                rating: 4.7
            },
            {
                id: 4,
                name: 'iPad Air (5th Gen)',
                price: 599,
                category: 'tablets',
                image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202203',
                description: 'Versatile tablet for work and play',
                stock: 75,
                rating: 4.6
            },
            {
                id: 5,
                name: 'Samsung Galaxy S24',
                price: 899,
                category: 'smartphones',
                image: 'https://tse1.mm.bing.net/th/id/OIP.RCaOvi3C_QXx33EUvGht9wHaFj?pid=Api&P=0&h=180',
                description: 'Android flagship smartphone',
                stock: 60,
                rating: 4.5
            },
            {
                id: 6,
                name: 'Dell XPS 13',
                price: 1299,
                category: 'laptops',
                image: 'https://tse4.mm.bing.net/th/id/OIP.hMAIPnBXJI94Mj7KQKIUjAHaHa?pid=Api&P=0&h=180',
                description: 'Ultrabook with premium design',
                stock: 30,
                rating: 4.4
            },
            {
                id: 7,
                name: 'Apple Magic Mouse',
                price: 79,
                category: 'accessories',
                image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2E3',
                description: 'Wireless mouse with multi-touch surface',
                stock: 150,
                rating: 4.2
            },
            {
                id: 8,
                name: 'Microsoft Surface Pro 9',
                price: 1099,
                category: 'tablets',
                image: 'https://m.media-amazon.com/images/I/51dkQJZu2gL.jpg',
                description: 'Laptop replacement tablet',
                stock: 40,
                rating: 4.3
            },
            {
                id: 9,
                name: 'Sony WH-1000XM5 Headphones',
                price: 399,
                category: 'accessories',
                image: 'https://tse1.mm.bing.net/th/id/OIP.3F3x6GsCuDRz0WoEGH3vvQHaHa?pid=Api&P=0&h=180',
                description: 'Industry-leading noise-canceling headphones',
                stock: 80,
                rating: 4.8
            },
            {
                id: 10,
                name: 'Asus ROG Zephyrus G14',
                price: 1599,
                category: 'laptops',
                image: 'https://tse1.mm.bing.net/th/id/OIP.leYq_rx_jZnSmw3qpan6KAHaFH?pid=Api&P=0&h=180',
                description: 'Gaming laptop with high performance GPU',
                stock: 20,
                rating: 4.7
            },
            {
                id: 11,
                name: 'Google Pixel 8 Pro',
                price: 899,
                category: 'smartphones',
                image: 'https://tse4.mm.bing.net/th/id/OIP.Ji5c6HEB4HcjuMY2TJmeFQHaHa?pid=Api&P=0&h=180',
                description: 'Google’s flagship with AI camera features',
                stock: 45,
                rating: 4.6
            },
            {
                id: 12,
                name: 'HP Spectre x360',
                price: 1399,
                category: 'laptops',
                image: 'https://tse3.mm.bing.net/th/id/OIP.YanXwvSnoW_TVuwR3xZJUgHaFc?pid=Api&P=0&h=180',
                description: 'Convertible laptop with 2-in-1 design',
                stock: 28,
                rating: 4.5
            },
            {
                id: 13,
                name: 'Apple Watch Ultra 2',
                price: 799,
                category: 'smartwatches',
                image: 'https://tse4.mm.bing.net/th/id/OIP.yIzRAOoy6K_V84Q3f8Z_UgHaIf?pid=Api&P=0&h=180',
                description: 'Rugged smartwatch for outdoor adventures',
                stock: 70,
                rating: 4.7
            },
            {
                id: 14,
                name: 'Samsung Galaxy Tab S9',
                price: 849,
                category: 'tablets',
                image: 'https://tse2.mm.bing.net/th/id/OIP.OlXP6AWIR2TLvAi2xxXkdQHaFP?pid=Api&P=0&h=180',
                description: 'High-end Android tablet for work and play',
                stock: 50,
                rating: 4.4
            },
            {
                id: 15,
                name: 'Logitech MX Master 3S',
                price: 99,
                category: 'accessories',
                image: 'https://tse4.mm.bing.net/th/id/OIP.5WgFPsz6Cl7js5P7hdYqjAHaF6?pid=Api&P=0&h=180',
                description: 'Ergonomic wireless mouse for productivity',
                stock: 120,
                rating: 4.8
            },
            {
                id: 16,
                name: 'LG UltraGear 27” Gaming Monitor',
                price: 499,
                category: 'monitors',
                image: 'https://tse1.mm.bing.net/th/id/OIP.-fN4dJ9j1sOVP6oYoVwJFgHaHa?pid=Api&P=0&h=180',
                description: '4K UHD gaming monitor with HDR support',
                stock: 35,
                rating: 4.6
            },
            {
                id: 17,
                name: 'Canon EOS R6 Mark II',
                price: 2499,
                category: 'cameras',
                image: 'https://tse1.mm.bing.net/th/id/OIP.Z34joo9YBtB_QWARHA3WNgHaGW?pid=Api&P=0&h=180',
                description: 'Professional mirrorless camera',
                stock: 18,
                rating: 4.9
            },
            {
                id: 18,
                name: 'Bose QuietComfort Earbuds II',
                price: 299,
                category: 'audio',
                image: 'https://tse2.mm.bing.net/th/id/OIP.OAQrannhPWFWCpKvgMaZCQHaGT?pid=Api&P=0&h=180',
                description: 'Premium sound with world-class noise cancellation',
                stock: 95,
                rating: 4.7
            },
            {
                id: 19,
                name: 'Sony PlayStation 5',
                price: 499,
                category: 'gaming',
                image: 'https://tse2.mm.bing.net/th/id/OIP.K6Uf3DXrRHstBHXQW3juBQHaHa?pid=Api&P=0&h=180',
                description: 'Next-gen gaming console with 4K graphics',
                stock: 100,
                rating: 4.9
            },
            {
                id: 20,
                name: 'Beats Studio Pro',
                price: 349,
                category: 'audio',
                image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQLK3',
                description: 'High-performance wireless headphones',
                stock: 88,
                rating: 4.6
            },
            {
                id: 21,
                name: 'DJI Mini 4 Pro Drone',
                price: 1099,
                category: 'cameras',
                image: 'https://tse4.mm.bing.net/th/id/OIP.PJDkxgFKr8_eE3BgD9SKCwHaHa?pid=Api&P=0&h=180',
                description: 'Lightweight drone with 4K video',
                stock: 22,
                rating: 4.6
            },
            {
                id: 22,
                name: 'Samsung Odyssey G9',
                price: 1499,
                category: 'monitors',
                image: 'https://tse2.mm.bing.net/th/id/OIP.EoJ8nO3TX6kkefMnN0Sg7gHaF6?pid=Api&P=0&h=180',
                description: 'Ultra-wide curved gaming monitor',
                stock: 15,
                rating: 4.7
            },
            {
                id: 23,
                name: 'Garmin Fenix 7',
                price: 699,
                category: 'smartwatches',
                image: 'https://tse3.mm.bing.net/th/id/OIP.OA3E0-h9AKalLrZr09IBvQHaHa?pid=Api&P=0&h=180',
                description: 'Multi-sport GPS smartwatch',
                stock: 55,
                rating: 4.5
            },
            {
                id: 24,
                name: 'Razer BlackWidow V4 Pro',
                price: 229,
                category: 'gaming',
                image: 'https://tse1.mm.bing.net/th/id/OIP.lBqeOEXGvOxsEzdbBZujXwHaHa?pid=Api&P=0&h=180',
                description: 'Mechanical gaming keyboard with RGB',
                stock: 65,
                rating: 4.7
            }
            
        ];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        this.cart = JSON.parse(localStorage.getItem(`cart_${this.currentUser?.id}`) || '[]');
    }

    // Simulate API delay
    _simulateDelay(ms = 300) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Authentication methods
    async signup(userData) {
        await this._simulateDelay();

        const existingUser = this.users.find(u => u.email === userData.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const newUser = {
            id: Date.now(),
            ...userData,
            createdAt: new Date().toISOString()
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        return {
            user: { id: newUser.id, name: newUser.name, email: newUser.email },
            token: `jwt_token_${newUser.id}`
        };
    }

    async login(credentials) {
        await this._simulateDelay();

        const user = this.users.find(u =>
            u.email === credentials.email && u.password === credentials.password
        );

        if (!user) {
            throw new Error('Invalid credentials');
        }

        this.currentUser = { id: user.id, name: user.name, email: user.email };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.cart = JSON.parse(localStorage.getItem(`cart_${user.id}`) || '[]');

        return {
            user: this.currentUser,
            token: `jwt_token_${user.id}`
        };
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.cart = [];
    }

    // Product methods
    async getProducts(filters = {}) {
        await this._simulateDelay(200);

        let filteredProducts = [...this.products];

        if (filters.category) {
            filteredProducts = filteredProducts.filter(p => p.category === filters.category);
        }

        if (filters.minPrice) {
            filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice);
        }

        if (filters.maxPrice) {
            filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice);
        }

        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            filteredProducts = filteredProducts.filter(p =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.description.toLowerCase().includes(searchTerm)
            );
        }

        return filteredProducts;
    }

    async getProductById(id) {
        await this._simulateDelay(200);

        const product = this.products.find(p => p.id === id);
        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    }

    // Cart methods
    async addToCart(productId, quantity = 1) {
        if (!this.currentUser) throw new Error('Not authenticated');

        await this._simulateDelay(200);

        const product = this.products.find(p => p.id === productId);
        if (!product) throw new Error('Product not found');

        if (product.stock < quantity) {
            throw new Error('Insufficient stock');
        }

        const existingItem = this.cart.find(item => item.productId === productId);

        if (existingItem) {
            if (product.stock < existingItem.quantity + quantity) {
                throw new Error('Insufficient stock');
            }
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: Date.now(),
                productId,
                quantity,
                product
            });
        }

        localStorage.setItem(`cart_${this.currentUser.id}`, JSON.stringify(this.cart));
        return this.cart;
    }

    async removeFromCart(productId) {
        if (!this.currentUser) throw new Error('Not authenticated');

        await this._simulateDelay(200);

        this.cart = this.cart.filter(item => item.productId !== productId);
        localStorage.setItem(`cart_${this.currentUser.id}`, JSON.stringify(this.cart));
        return this.cart;
    }

    async updateCartQuantity(productId, quantity) {
        if (!this.currentUser) throw new Error('Not authenticated');

        await this._simulateDelay(200);

        const item = this.cart.find(item => item.productId === productId);
        if (item) {
            if (quantity <= 0) {
                return this.removeFromCart(productId);
            }

            const product = this.products.find(p => p.id === productId);
            if (product && product.stock < quantity) {
                throw new Error('Insufficient stock');
            }

            item.quantity = quantity;
            localStorage.setItem(`cart_${this.currentUser.id}`, JSON.stringify(this.cart));
        }
        return this.cart;
    }

    async getCart() {
        if (!this.currentUser) return [];
        await this._simulateDelay(100);
        return this.cart;
    }

    async checkout(paymentInfo) {
        if (!this.currentUser) throw new Error('Not authenticated');

        await this._simulateDelay(1000);

        // Simulate checkout process
        const order = {
            id: Date.now(),
            userId: this.currentUser.id,
            items: [...this.cart],
            total: this.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
            paymentInfo,
            status: 'processing',
            createdAt: new Date().toISOString()
        };

        // Clear cart after successful checkout
        this.cart = [];
        localStorage.setItem(`cart_${this.currentUser.id}`, JSON.stringify(this.cart));

        return order;
    }
}

export const apiService = new APIService();