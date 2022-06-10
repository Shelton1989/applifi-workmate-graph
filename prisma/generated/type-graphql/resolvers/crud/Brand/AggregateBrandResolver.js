"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBrandResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateBrandArgs_1 = require("./args/AggregateBrandArgs");
const Brand_1 = require("../../../models/Brand");
const AggregateBrand_1 = require("../../outputs/AggregateBrand");
const helpers_1 = require("../../../helpers");
let AggregateBrandResolver = class AggregateBrandResolver {
    async aggregateBrand(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBrand_1.AggregateBrand, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBrandArgs_1.AggregateBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateBrandResolver.prototype, "aggregateBrand", null);
AggregateBrandResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brand_1.Brand)
], AggregateBrandResolver);
exports.AggregateBrandResolver = AggregateBrandResolver;
