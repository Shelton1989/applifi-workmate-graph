"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertColorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertColorArgs_1 = require("./args/UpsertColorArgs");
const Color_1 = require("../../../models/Color");
const helpers_1 = require("../../../helpers");
let UpsertColorResolver = class UpsertColorResolver {
    async upsertColor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Color_1.Color, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertColorArgs_1.UpsertColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertColorResolver.prototype, "upsertColor", null);
UpsertColorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Color_1.Color)
], UpsertColorResolver);
exports.UpsertColorResolver = UpsertColorResolver;
