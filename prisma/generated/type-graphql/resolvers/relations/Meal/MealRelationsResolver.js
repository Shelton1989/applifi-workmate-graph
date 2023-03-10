"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRating_1 = require("../../../models/AggregateRating");
const Features_1 = require("../../../models/Features");
const Meal_1 = require("../../../models/Meal");
const MealAvailability_1 = require("../../../models/MealAvailability");
const MealItem_1 = require("../../../models/MealItem");
const Order_1 = require("../../../models/Order");
const Post_1 = require("../../../models/Post");
const Reaction_1 = require("../../../models/Reaction");
const Tenant_1 = require("../../../models/Tenant");
const User_1 = require("../../../models/User");
const MealAvailabilityArgs_1 = require("./args/MealAvailabilityArgs");
const MealFeaturesArgs_1 = require("./args/MealFeaturesArgs");
const MealItemsArgs_1 = require("./args/MealItemsArgs");
const MealLikedByArgs_1 = require("./args/MealLikedByArgs");
const MealOrdersArgs_1 = require("./args/MealOrdersArgs");
const MealPostsArgs_1 = require("./args/MealPostsArgs");
const MealReactionsArgs_1 = require("./args/MealReactionsArgs");
const helpers_1 = require("../../../helpers");
let MealRelationsResolver = class MealRelationsResolver {
    async Tenant(meal, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            where: {
                id: meal.id,
            },
        }).Tenant({});
    }
    async Items(meal, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            where: {
                id: meal.id,
            },
        }).Items(args);
    }
    async Availability(meal, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            where: {
                id: meal.id,
            },
        }).Availability(args);
    }
    async Orders(meal, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            where: {
                id: meal.id,
            },
        }).Orders(args);
    }
    async AggregateRating(meal, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            where: {
                id: meal.id,
            },
        }).AggregateRating({});
    }
    async LikedBy(meal, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            where: {
                id: meal.id,
            },
        }).LikedBy(args);
    }
    async Posts(meal, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            where: {
                id: meal.id,
            },
        }).Posts(args);
    }
    async Features(meal, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            where: {
                id: meal.id,
            },
        }).Features(args);
    }
    async Reactions(meal, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            where: {
                id: meal.id,
            },
        }).Reactions(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tenant_1.Tenant, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Meal_1.Meal, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MealRelationsResolver.prototype, "Tenant", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [MealItem_1.MealItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Meal_1.Meal, Object, MealItemsArgs_1.MealItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealRelationsResolver.prototype, "Items", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [MealAvailability_1.MealAvailability], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Meal_1.Meal, Object, MealAvailabilityArgs_1.MealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealRelationsResolver.prototype, "Availability", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Meal_1.Meal, Object, MealOrdersArgs_1.MealOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealRelationsResolver.prototype, "Orders", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => AggregateRating_1.AggregateRating, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Meal_1.Meal, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MealRelationsResolver.prototype, "AggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Meal_1.Meal, Object, MealLikedByArgs_1.MealLikedByArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealRelationsResolver.prototype, "LikedBy", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Meal_1.Meal, Object, MealPostsArgs_1.MealPostsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealRelationsResolver.prototype, "Posts", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Features_1.Features], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Meal_1.Meal, Object, MealFeaturesArgs_1.MealFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealRelationsResolver.prototype, "Features", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reaction_1.Reaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Meal_1.Meal, Object, MealReactionsArgs_1.MealReactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealRelationsResolver.prototype, "Reactions", null);
MealRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meal_1.Meal)
], MealRelationsResolver);
exports.MealRelationsResolver = MealRelationsResolver;
