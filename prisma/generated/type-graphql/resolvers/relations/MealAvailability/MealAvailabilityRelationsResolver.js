"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Meal_1 = require("../../../models/Meal");
const MealAvailability_1 = require("../../../models/MealAvailability");
const helpers_1 = require("../../../helpers");
let MealAvailabilityRelationsResolver = class MealAvailabilityRelationsResolver {
    async Meal(mealAvailability, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.findUnique({
            where: {
                id: mealAvailability.id,
            },
        }).Meal({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Meal_1.Meal, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [MealAvailability_1.MealAvailability, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityRelationsResolver.prototype, "Meal", null);
MealAvailabilityRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealAvailability_1.MealAvailability)
], MealAvailabilityRelationsResolver);
exports.MealAvailabilityRelationsResolver = MealAvailabilityRelationsResolver;
