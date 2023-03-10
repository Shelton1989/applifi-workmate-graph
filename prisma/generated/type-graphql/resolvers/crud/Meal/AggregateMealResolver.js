"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMealArgs_1 = require("./args/AggregateMealArgs");
const Meal_1 = require("../../../models/Meal");
const AggregateMeal_1 = require("../../outputs/AggregateMeal");
const helpers_1 = require("../../../helpers");
let AggregateMealResolver = class AggregateMealResolver {
    async aggregateMeal(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMeal_1.AggregateMeal, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMealArgs_1.AggregateMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMealResolver.prototype, "aggregateMeal", null);
AggregateMealResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meal_1.Meal)
], AggregateMealResolver);
exports.AggregateMealResolver = AggregateMealResolver;
