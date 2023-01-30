"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertFeaturesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertFeaturesArgs_1 = require("./args/UpsertFeaturesArgs");
const Features_1 = require("../../../models/Features");
const helpers_1 = require("../../../helpers");
let UpsertFeaturesResolver = class UpsertFeaturesResolver {
    async upsertFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Features_1.Features, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertFeaturesArgs_1.UpsertFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertFeaturesResolver.prototype, "upsertFeatures", null);
UpsertFeaturesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Features_1.Features)
], UpsertFeaturesResolver);
exports.UpsertFeaturesResolver = UpsertFeaturesResolver;
