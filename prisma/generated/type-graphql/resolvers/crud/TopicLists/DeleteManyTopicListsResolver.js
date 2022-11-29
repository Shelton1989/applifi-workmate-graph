"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTopicListsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyTopicListsArgs_1 = require("./args/DeleteManyTopicListsArgs");
const TopicLists_1 = require("../../../models/TopicLists");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTopicListsResolver = class DeleteManyTopicListsResolver {
    async deleteManyTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTopicListsArgs_1.DeleteManyTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTopicListsResolver.prototype, "deleteManyTopicLists", null);
DeleteManyTopicListsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TopicLists_1.TopicLists)
], DeleteManyTopicListsResolver);
exports.DeleteManyTopicListsResolver = DeleteManyTopicListsResolver;
