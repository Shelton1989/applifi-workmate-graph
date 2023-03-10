"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Features_1 = require("../../../models/Features");
const Meal_1 = require("../../../models/Meal");
const helpers_1 = require("../../../helpers");
let FeaturesRelationsResolver = class FeaturesRelationsResolver {
    async Meal(features, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).features.findUnique({
            where: {
                id: features.id,
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
    tslib_1.__metadata("design:paramtypes", [Features_1.Features, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesRelationsResolver.prototype, "Meal", null);
FeaturesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Features_1.Features)
], FeaturesRelationsResolver);
exports.FeaturesRelationsResolver = FeaturesRelationsResolver;
