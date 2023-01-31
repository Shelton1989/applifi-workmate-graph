"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRating_1 = require("../../../models/AggregateRating");
const BookingOrder_1 = require("../../../models/BookingOrder");
const Experience_1 = require("../../../models/Experience");
const ExperienceAvailability_1 = require("../../../models/ExperienceAvailability");
const Features_1 = require("../../../models/Features");
const Location_1 = require("../../../models/Location");
const Post_1 = require("../../../models/Post");
const Price_1 = require("../../../models/Price");
const Tenant_1 = require("../../../models/Tenant");
const User_1 = require("../../../models/User");
const ExperienceAvailabilityArgs_1 = require("./args/ExperienceAvailabilityArgs");
const ExperienceBookingsArgs_1 = require("./args/ExperienceBookingsArgs");
const ExperienceFeaturesArgs_1 = require("./args/ExperienceFeaturesArgs");
const ExperienceLikedByArgs_1 = require("./args/ExperienceLikedByArgs");
const ExperienceLocationsArgs_1 = require("./args/ExperienceLocationsArgs");
const ExperiencePostsArgs_1 = require("./args/ExperiencePostsArgs");
const helpers_1 = require("../../../helpers");
let ExperienceRelationsResolver = class ExperienceRelationsResolver {
    async Tenant(experience, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            where: {
                id: experience.id,
            },
        }).Tenant({});
    }
    async Availability(experience, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            where: {
                id: experience.id,
            },
        }).Availability(args);
    }
    async Bookings(experience, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            where: {
                id: experience.id,
            },
        }).Bookings(args);
    }
    async AggregateRating(experience, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            where: {
                id: experience.id,
            },
        }).AggregateRating({});
    }
    async LikedBy(experience, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            where: {
                id: experience.id,
            },
        }).LikedBy(args);
    }
    async Locations(experience, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            where: {
                id: experience.id,
            },
        }).Locations(args);
    }
    async Price(experience, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            where: {
                id: experience.id,
            },
        }).Price({});
    }
    async Posts(experience, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            where: {
                id: experience.id,
            },
        }).Posts(args);
    }
    async Features(experience, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            where: {
                id: experience.id,
            },
        }).Features(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tenant_1.Tenant, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Experience_1.Experience, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceRelationsResolver.prototype, "Tenant", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ExperienceAvailability_1.ExperienceAvailability], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Experience_1.Experience, Object, ExperienceAvailabilityArgs_1.ExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceRelationsResolver.prototype, "Availability", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [BookingOrder_1.BookingOrder], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Experience_1.Experience, Object, ExperienceBookingsArgs_1.ExperienceBookingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceRelationsResolver.prototype, "Bookings", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => AggregateRating_1.AggregateRating, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Experience_1.Experience, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceRelationsResolver.prototype, "AggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Experience_1.Experience, Object, ExperienceLikedByArgs_1.ExperienceLikedByArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceRelationsResolver.prototype, "LikedBy", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Location_1.Location], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Experience_1.Experience, Object, ExperienceLocationsArgs_1.ExperienceLocationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceRelationsResolver.prototype, "Locations", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Price_1.Price, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Experience_1.Experience, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceRelationsResolver.prototype, "Price", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Experience_1.Experience, Object, ExperiencePostsArgs_1.ExperiencePostsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceRelationsResolver.prototype, "Posts", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Features_1.Features], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Experience_1.Experience, Object, ExperienceFeaturesArgs_1.ExperienceFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceRelationsResolver.prototype, "Features", null);
ExperienceRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Experience_1.Experience)
], ExperienceRelationsResolver);
exports.ExperienceRelationsResolver = ExperienceRelationsResolver;
