"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBrandProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateBrandProductArgs_1 = require("./args/AggregateBrandProductArgs");
const BrandProduct_1 = require("../../../models/BrandProduct");
const AggregateBrandProduct_1 = require("../../outputs/AggregateBrandProduct");
const helpers_1 = require("../../../helpers");
let AggregateBrandProductResolver = class AggregateBrandProductResolver {
    async aggregateBrandProduct(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBrandProduct_1.AggregateBrandProduct, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBrandProductArgs_1.AggregateBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateBrandProductResolver.prototype, "aggregateBrandProduct", null);
AggregateBrandProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BrandProduct_1.BrandProduct)
], AggregateBrandProductResolver);
exports.AggregateBrandProductResolver = AggregateBrandProductResolver;
