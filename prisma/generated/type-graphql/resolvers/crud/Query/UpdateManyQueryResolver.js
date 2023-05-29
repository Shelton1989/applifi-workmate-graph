"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyQueryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyQueryArgs_1 = require("./args/UpdateManyQueryArgs");
const Query_1 = require("../../../models/Query");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyQueryResolver = class UpdateManyQueryResolver {
    async updateManyQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyQueryArgs_1.UpdateManyQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyQueryResolver.prototype, "updateManyQuery", null);
UpdateManyQueryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Query_1.Query)
], UpdateManyQueryResolver);
exports.UpdateManyQueryResolver = UpdateManyQueryResolver;
